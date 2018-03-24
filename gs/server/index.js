require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const massive = require('massive');
const bodyParser = require('body-parser');
const checkForSession = require('./middlewares/checkForSession')
const invited = require('./controllers/invitedList_controller')
const auth = require('./controllers/auth_controller')
const cors = require('cors');


const {
    SERVER_PORT,
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL,
    CONNECTION_STRING
} = process.env

const app = express();

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
})

app.use( express.static( `${__dirname}/../build` ) );

app.use(cors())
app.use(bodyParser.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true

}))

app.use(checkForSession)

app.use(passport.initialize())
app.use(passport.session())

passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL
},
    function (accessToken, refreashToken, extraParams, profile, done) {
        const db = app.get('db')
        db.find_user([profile.id]).then(users => {
            if (!users[0]) {
                db.create_user([profile.displayName, profile.id]).then(res => {
                    return done(null, res[0].auth_id)
                })
            } else {
                return done(null, users[0].auth_id)
            }
        })
        .catch(console.log)
    }
))

passport.serializeUser((id, done) => {
    return done(null, id)
})

passport.deserializeUser((id, done) => {
    // console.log('deserialize' + id)
    app.get('db').find_user([id]).then(res => {
        // console.log(res)
        return done(null, res[0])
    })
})

app.get('/api/createdtriplist/:id', auth.createdTripslist)
app.get('/api/trip_info/:id',auth.getTripDetails)
app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: `${process.env.HOMEPAGE}#/dashboard`,
    failureRedirect: `${process.env.HOMEPAGE}`
}))
app.get('/api/invitedtrips/:id1', auth.invitedTrips)
app.get('/api/list', invited.read)
app.get('/api/tripList/:userid', (req, res) =>{
    const db = app.get('db')
    const userid = req.params.userid;
    db.trip_list([userid]).then(trips => res.send(trips))
    .catch(err => res.status(500))
})
app.post('/api/travelers/:id1/:id2', auth.addTravelers)
app.post('/api/login', auth.login)
app.post('/api/register', auth.register)
app.put('/api/addtotrip', auth.joinTrip)
app.get('/api/signout', auth.signout)
app.get('/api/user', auth.getUser)
app.put('/api/profile', auth.updateUser)
app.post('/api/newTrip', auth.newTrip)
app.delete('/api/trip/:id', auth.deleteTrip)
app.post('/api/invite', auth.inviteTraveler)






app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`))
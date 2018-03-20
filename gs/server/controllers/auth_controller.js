const users = require('../temp/users');
let id = 1;

module.exports = {
  login: ( req, res, next ) => {
    const { session } = req;
    const { username, password } = req.body;

    const user = users.find( user => user.username === username && user.password === password );

    if ( user ) {
      session.user.username = user.username;
      res.status(200).send(session.user);
    } else {
      res.status(500).send('Unauthorized.');
    }
  },

  register: ( req, res, next ) => {
    const { session } = req;
    const { username, password } = req.body;

    users.push({ id, username, password });
    id++;

    session.user.username = username;

    res.status(200).send( session.user );
  },

  signout: ( req, res, next ) => {
    const { session } = req;
    session.destroy();
    res.status(200).send( req.session );
  },

  getUser: ( req, res, next ) => {
    console.log(req.user)
    const { session } = req;
    res.status(200).send( req.user );
  },

  updateUser: (req, res) => {
    const db = req.app.get('db')
    db.users.update({id: req.user.id} , req.body, (err, user) => {

    }).then( response => {
      console.log(response)
      res.status(200).send('true')
    }).catch( err => res.status(500).send('Too bad'))
    },

    updateTrips: (req, res) =>{
      const db = req.app.get('db')
      db.trips.update({id: req.trips.id}, req.body, (err, id) => {
      }).then( response => {
        res.status(200).send('Trip Updated')
      }).catch( err=> res.status(500).send('No Trip Added'))
    }
};


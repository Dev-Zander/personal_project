const users = require('../temp/users');
let id = 1;

module.exports = {
  login: (req, res, next) => {
    const { session } = req;
    const { username, password } = req.body;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      session.user.username = user.username;
      res.status(200).send(session.user);
    } else {
      res.status(500).send('Unauthorized.');
    }
  },

  register: (req, res, next) => {
    const { session } = req;
    const { username, password } = req.body;

    users.push({ id, username, password });
    id++;

    session.user.username = username;

    res.status(200).send(session.user);
  },

  signout: (req, res, next) => {
    const { session } = req;
    session.destroy();
    res.redirect(`https://black-panther.auth0.com/v2/logout?returnTo=${process.env.REDIRECT_HOMEPAGE}`)
  },

  getUser: (req, res, next) => {
    const { session } = req;
    res.status(200).send(req.user);
  },

  updateUser: (req, res) => {
    const db = req.app.get('db')
    db.users.update({ id: req.user.id }, req.body, (err, user) => {

    }).then(response => {
      res.status(200).send('true')
    }).catch(err => res.status(500).send('Failed'))
  },

  inviteTraveler: (req, res) => {
    const db = req.app.get('db')
    db.travelers.insert(req.body).then(response => {
      res.status(200).send('true')
    }).catch(err => {
      res.status(500).send('Failed')
    })
  },

  joinTrip: (req, res) => {

    const db = req.app.get('db')
    db.join_trip([req.body.traveler_joined, req.user.id,req.body.trip_id,req.user.phone_number]).then(response => {
      res.status(200).send("It worked!");
    });
  },

  getTripDetails: (req, res) => {
    const db = req.app.get('db')
    let id = parseInt(req.params.id)
    db.getTrips([id])
      .then(tripDetails => res.send(tripDetails))
  },

  newTrip: (req, res) => {
    const db = req.app.get('db')
    let currentUser = req.user.id
    Object.assign(req.body, { created_by_id: currentUser })

    db.trips.save(req.body, (err, obj) => {

    }).then(response => {
      res.status(200).send('Success')
    })
  },

  tripList: (req, res) => {
    const id = req.params.userid
    const db = req.app.get('db')
    db.trip_list([id]).then(
      trips => res.send(trips)
    )
  },
  createdTripslist:(req,res)=>{
    const id = req.user.id
    const db = req.app.get('db')
    db.created_trips([id])
    .then( response => res.send(response))
  }, 

  invitedTrips: (req, res) => {
    const ph = req.params.id1
    const db = req.app.get('db')
    db.invited_trips([ph])
      .then(invitedTrips => {
        res.send(invitedTrips)
      })

  },
  deleteTrip: (req, res) => {
    const db = req.app.get('db')
    const { params } = req
    db.delete_trips([params.id])
      .then(() => {
        db.trip_list([id])
          .then(
            trips => res.status(200).send(trips)
          )

      })
      .catch((err) => {
        res.status(500).send()
      })
  },

  addTravelers: (req, res) => {
    const db = req.app.get('db')
    const { params } = req
    db.invite_travelers([params.id1, params.id2])
      .then(travelers => res.send(travelers))

  }

};


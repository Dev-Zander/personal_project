import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home'
import Dashboard from './components/dashboard';
import EditProfile from './components/edit_profile';
import InviteTraveler from './components/invite_travelers';
import NewTrip from './components/new_trip';
import TravelerDetail from './components/traveler_details';
import TripDetails from './components/trip_details';
import UpcomingTrips from './components/upcoming_trip';
import InvitedTrips from './components/invited_trips';

export default(
    <Switch>
        <Route path='/'component={Home}exact/>
        <Route path='/dashboard'component={Dashboard}/>
        <Route path='/edit_profile'component={EditProfile}/>
        <Route path='/invite/:id'component={InviteTraveler}/>
        <Route path='/new_trip'component={NewTrip}/>
        <Route path='/traveler_details'component={TravelerDetail}/>
        <Route path='/trip_details/:id'component={TripDetails}/>
        <Route path='/upcoming'component={UpcomingTrips}/>
        <Route path='/invited_trips' component={InvitedTrips}/>
    </Switch>
)

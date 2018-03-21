import React, { Component } from 'react'
import axios from 'axios';

class UpcomingTrips extends Component {
    constructor(props){
        super(props);
        this.state = {
            trips:[]
        }
    }
    
componentWillReceiveProps(newProps){
    if(this.props.userID !== newProps.userID){

    }
    let id = newProps.userID;
    // console.log(id);
    axios.get(`/api/tripList/${id}`).then( res => {
        console.log(res.data)
        let newTrips = res.data
        this.setState({
            trips: newTrips
        })
    })
}


    render() {
       let trips = this.state.trips

       const displytrips = trips.map((trip, index) =>{
        return (
        <li key={index}>
            {trip.trip_start}
            {trip.trip_end}
            {trip.trip_name}
            {trip.trip_location}
        </li>
       )})
        return (

            <div>I am the Upcoming Trips!<br /><br />
              
              <br/>


           <ul>
         {displytrips}

              
           </ul>

            </div>


        )
    }

}

export default UpcomingTrips
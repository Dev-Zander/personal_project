import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

class UpcomingTrips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: [],
            myTrips:[],
            tripID: '',
            userID: ''

        }

        this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }
    handleDeleteClick(id) {
        axios.delete(`/api/trip/${id}`).then(res => {
            this.setState({ trips: res.data })
        })


    }
    handleInviteClick(id1, id2) {
        axios.post(`/api/travelers/${id1}/${id2}`)
        .then(res => {
            this.setState({
                tripID: { id1 },
                userID: { id2 }
            })


        })
    }

    componentWillReceiveProps(newProps) {
        if (this.props.userID !== newProps.userID) {

            var id = newProps.userID;
        }

        axios.get(`/api/tripList/${id}`).then(res => {

            let newTrips = res.data
            this.setState({
                trips: newTrips
            })
        })

        axios.get(`/api/createdtriplist/${id}`)
        .then(res =>{
            let createdTrips = res.data
            console.log(res.data,)
            this.setState({
                myTrips: createdTrips
            })
        })
    }


    render() {

        var trips = this.state.trips
        var createdtrip  = this.state.myTrips

        const displaycreatedTrips = createdtrip.map((trip, index) => {
            
            return (
                <div key={index}>

                    <div><Link to={`/invite/${trip.id}`}><button>Invite Travelers</button></Link><button onClick={() => this.handleDeleteClick(trip.id)}>Delete Trip</button> Trip Name:{trip.trip_name} Trip Location:{trip.trip_location}  Trip Start:{trip.trip_start}  Trip End:{trip.trip_end}</div>
                </div>
                

            )
        })
        const displytrips = trips.map((trip, index) => {
            
            return (
                <div key={index}>

                    <div><Link to={`/invite/${trip.id}`}><button>Invite Travelers</button></Link><button onClick={() => this.handleDeleteClick(trip.id)}>Delete Trip</button> Trip Name:{trip.trip_name} Trip Location:{trip.trip_location}  Trip Start:{trip.trip_start}  Trip End:{trip.trip_end}</div>
                </div>
                

            )
        })
        return (

            <div><h4>Here are your upcoming trips!</h4><br /><br />

                <br />

                <ul>
                    {displytrips}
                    {displaycreatedTrips}



                </ul>

            </div>


        )
    }

}

export default (UpcomingTrips)
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

class InvitedTrips extends Component {
    constructor(props) {
        super(props)
        this.state = {
            invitedTrips: []

        }
    }

    componentWillReceiveProps(userProps) {
        this.setState({



        })
        var ph = userProps.userPhone

        axios.get(`/api/invitedtrips/${ph}`)
            .then(res => {
                let trips = res.data
                this.setState({

                    invitedTrips: trips

                })

            })


    }
    render() {

        var trips = this.state.invitedTrips

        const displaytrips = trips.map((trip, index) => {
            console.log(trips, 'Trips', trip, 'trip')
            return (
                <div key={index}>

                    <div><Link to={`/trip_details/${trip.id}`}><button>Trip Details</button></Link>{trip.trip_name}
                        {trip.trip_location}
                        {trip.trip_start}
                    </div>

                </div>
            )
        })

        return (

            <div>



                <h4>This is where the list of trips a user has been invited to will be displayed</h4>

                {displaytrips}

            </div>


        )
    }

}

export default (InvitedTrips)
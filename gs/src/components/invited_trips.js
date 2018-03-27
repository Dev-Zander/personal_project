import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import '../styles/reset.css'
import '../styles/style.css'
import RaisedButton from 'material-ui/RaisedButton';

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
            return (

                <div className="myButtons">

<div className='invtied_Results'>

<h4 className="invited_trip">{`${trip.trip_start} ${trip.trip_location}`}</h4>
            
            
</div>
                <div key={index}>
     <div key={index}> <Link to={`/trip_details/${trip.id}`}><RaisedButton label="TRIP DETAILS" primary={true} /></Link> </div>  
    
    
  
                        
                    </div></div>

                
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
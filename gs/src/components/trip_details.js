import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'



class TravelerDetail extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            tripName:'',
            tripLocation:''
            
        }
        

    }

    componentWillMount(){
        var trip = this.props.match.params.id
       
        axios.get(`/api/trip_info/${trip}`)
        .then( res =>{
            var tripId = res.data[0].id
            let name = res.data[0].trip_name
            let location = res.data[0].trip_location

            this.setState({
                tripName: name,
                tripLocation: location,
                id: tripId 
            })
        })

    }

    joinTrip = () => {
        var confirmTrip = {
            traveler_joined: 'True',
            trip_id: this.state.id
            
        }

        axios.put('/api/addtotrip',confirmTrip)
        .then( res => {
                         
            swal({
                text: "You have joined the trip!",
                icon: "success",
                button: "OK",
              });
            
                this.props.history.push('/dashboard')
        })




    }

    rejectTrip = () => {
        
        var rejectTrip = {
            trip_id: this.state.id,
            traveler_id: null,
            phone_number: null,

            
        }

        axios.put('/api/rejecttrip',rejectTrip)
        .then( res => {
                         
            swal({
                text: "You have Rejected the trip!",
                icon: "success",
                button: "OK",
              });
            
                this.props.history.push('/dashboard')
        })

    }


    render() {
        return (

            <div>
                <Link to='/dashboard' className='buttons'>
                    <button>Dashboard</button></Link>
                <br />
                <br />I am the Trip Details Page!
    
                <br />



                <h3>Please Accept Trip or Reject Trip</h3>

                <div className='invited_trips'>

                    <button onClick={() => this.joinTrip()}>Join Trip</button><button onClick={() => this.rejectTrip()}>Reject Trip</button>
                    <br/>
                    {this.state.tripName}
                    <br/>
                    {this.state.tripLocation}
                    

                </div>
            </div>
        )
    }

}

export default TravelerDetail
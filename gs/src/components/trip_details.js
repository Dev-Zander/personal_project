import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import '../styles/reset.css'
import '../styles/style.css'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';



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
                <Link to='/dashboard' style={{marginTop:1}} className='buttons3'><RaisedButton label="Dashboard" primary={true} /></Link>
             

               <h1 style={{margin:25,fontSize:20}}>Trip Details</h1>

                <div className='list'>
                    {this.state.tripName}
                    <br/>
                    {this.state.tripLocation}

                <div  classsName="buttons">
                    <div>
                    <RaisedButton style={{}} onClick={() => this.joinTrip()} label="Join TRIP" primary={true}/>
                   </div>
                   <br/>
                   <div>
                    <RaisedButton style={{}} onClick={() => this.rejectTrip()} label="Reject TRIP"/>
                   </div>
                   </div>
                    <br/>
                    

                </div>
            </div>
        )
    }

}

export default TravelerDetail
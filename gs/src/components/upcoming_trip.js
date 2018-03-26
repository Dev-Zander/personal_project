import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert'
import '../styles/reset.css'
import '../styles/style.css'
import RaisedButton from 'material-ui/RaisedButton';

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
        }).then(
            res => {
            swal({
                text: "Trip Deleted!",
                icon: "success",
                button: "OK",
              })
            
              

            
        }
    )
    this.setState({})
         

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
                
                
               

                    <div className="upcoming_trips"> 
                    
                
                   <section id="trip_list">
                   <ul className="ul">

                    <div className='Results'>
                    <div className="heading"> Trip Name:  </div>
                    <li className="li">{trip.trip_name}</li> </div>
                   
<div className='Results'>
                    <div className="heading"> Trip Location:  </div>
                    <li className="li">
                     {  trip.trip_location}</li> 
                    </div>      
<div className='Results'>                    
                    <div className="heading"> Trip Start:</div>
                    <li className="li">{trip.trip_start}</li> 
                    </div>      
 <div className='Results'>                   
                    <div className="heading"> Trip End:  </div>
                    <li className="li">{trip.trip_end}</li> 
   </div>                 
                    </ul>
                    </section>
                    
                    
                    <div className="myButtons">
                    <div key={index}> <Link to={`/invite/${trip.id}`}><RaisedButton label="SEND INVITE" primary={true} /></Link> </div>  

                    
                    <RaisedButton style={{margin:5}} onClick={() => this.handleDeleteClick(trip.id)} label="DELETE TRIP" />
                </div></div>

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

            <div><h4 className="h4">Here are your upcoming trips!</h4>

                <ul>
                    {displytrips}
                    {displaycreatedTrips}



                </ul>

            </div>


        )
    }

}

export default (UpcomingTrips)
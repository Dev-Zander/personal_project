import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert'
import '../styles/reset.css'
import '../styles/style.css'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class NewTrip extends Component{
   

    tripInfo = () => {
        var newTripProps = {
            trip_name: this.refs.tripName.value,
            trip_location: this.refs.tripLocation.value,
            trip_start: this.refs.tripStart.value,
            trip_end: this.refs.tripEnd.value
        }


        axios.post('api/newTrip', newTripProps).then(
            res => {
            swal({
                text: "Trip Added!",
                icon: "success",
                button: "OK",
              })
            
                this.props.history.push('/dashboard')

            
        }
        )
    


}
    render(){
        return(

            <div>
<h1 style={{margin:25}}>Add New Trip</h1>

<Link to='/dashboard' styly={{}} className='buttons4'><RaisedButton label="Dashboard" primary={true} /></Link>

<div className='list1'>
<span className="h4">
                    <h4></h4>
                    <input ref="tripName" placeholder="Trip Name" type="text" />
                    <br />
                    <h4></h4>
                    <input id="search_type" ref="tripLocation" placeholder="Trip Location" type="text" />
                    <br />
                    <h4></h4>
                    <input ref="tripStart" placeholder="ex.02022018" type="date" />
                    <br />
                    <h4></h4>
                    <input ref="tripEnd" placeholder="ex.02022018" type="date" />

                     <div className="myButtons">
                    <Link to='/dashboard' style={{margin:0,marginRight:30}}className='buttons4'><RaisedButton label="Cancel" primary={true} /></Link>
                    <RaisedButton  onClick={() =>this.tripInfo()} label="Save" />
                    </div>
      </span>

                </div>

            </div>
        )
      
        
    }
}

export default NewTrip
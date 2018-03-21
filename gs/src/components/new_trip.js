import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class NewTrip extends Component{
    



    tripInfo = () => {
        var newTripProps = {
            trip_name: this.refs.tripName.value,
            trip_location: this.refs.tripLocation.value,
            trip_start: this.refs.tripStart.value,
            trip_end: this.refs.tripEnd.value
        }


        axios.post('api/newTrip', newTripProps).then(
            res => {alert('Trip added!');
            
                this.props.history.push('/dashboard')
            
        }
        )
    


}
    render(){
        return(

            <div>
<h1> YOU ARE ADDING A NEW TRIP!</h1>

<br/>
<br/>
<Link to='/dashboard' className='buttons'> <button>Dashboard</button></Link>

<div className='new_trip'>
                    <br />
                    <br />
                    <br />
                    <h4>Trip Name</h4>
                    <input ref="tripName" placeholder="Trip Name" type="text" />
                    <br />
                    <h4>Trip Location</h4>
                    <input ref="tripLocation" placeholder="Trip Location" type="text" />
                    <br />
                    <h4>Trip Start Date</h4>
                    <input ref="tripStart" placeholder="ex.02022018" type="date" />
                    <br />
                    <h4>Trip End Date</h4>
                    <input ref="tripEnd" placeholder="ex.02022018" type="date" />
                    <br />
                    <br/>
                    <button>Cancel</button><button onClick={() =>this.tripInfo()}>Save</button>
                    <br />
                    <br />
                </div>

            </div>
        )
        }
    
}

export default NewTrip
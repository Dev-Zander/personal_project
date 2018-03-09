import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class NewTrip extends Component{
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
                    <input placeholder="Trip Name" type="text" />
                    <br />
                    <h4>Trip Location</h4>
                    <input placeholder="Trip Location" type="text" />
                    <br />
                    <h4>Trip Start Date</h4>
                    <input placeholder="ex.02022018" type="number" maxLength='8'/>
                    <br />
                    <h4>Trip End Date</h4>
                    <input placeholder="ex.02022018" type="number" maxLength='8' />
                    <br />
                    <br/>
                    <button>Cancel</button><button>Save</button>
                    <br />
                    <br />
                </div>

            </div>
        )
        }
    
}

export default NewTrip
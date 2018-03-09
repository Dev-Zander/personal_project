import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Dashboard extends Component{
    render(){
        return(

    
        <div>
<h1>YOU ARE ON YOUR DASHBOARD!</h1>
        <Link to='/edit_profile' className='buttons'> <button>Edit Profile</button></Link>
          <br/>
          <br/>
        <Link to='/new_trip' className='buttons'> <button>Create New Trip</button></Link>
    
        </div>
       

        
        )
        }
    
}

export default Dashboard
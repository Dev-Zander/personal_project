import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';

class InviteTravelers extends Component {


    inviteUser = () => {
        var inviteInfo = {
            phone_number: this.refs.phoneNumber.value,
            trip_id: this.props.match.params.id
        }
        axios.post('/api/invite', inviteInfo).then( res =>{

            swal({
                text: "Invitation Sent!",
                icon: "success",
                button: "OK",
              });
        })
    
    }
    

    render(){
        
        return(

            <div>
                
                <h1>I am the Invite Travelers</h1>

            <Link to='/dashboard' className='buttons'>
            <button>Dashboard</button></Link>
            <br/>
            <br/>

            <h3>Input The Phone Number for Your Invitee</h3>

            <div className='invite_list'>
            <input ref="phoneNumber" placeholder="Numbers Only" type="number" pattern="0-9"/>
            <br/>
            <br/>
            <button onClick={()=> this.inviteUser()}>Submit</button>
            <Link to='/dashboard' className='buttons'>
            <button>Done</button></Link><button>Cancel</button>
            <br/>
            <br/>
            
            
            
            </div>
            </div>

        )
        }
    
}



export default InviteTravelers
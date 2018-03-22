import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';

class Invite extends Component {


    inviteUser = () => {
        var userPhone = {
            phone_number: this.refs.phoneNumber.value
        }

        axios.put('/api/invite', userPhone).then( res =>{

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
            <input ref="phoneNumber" placeholder="Numbers Only" type="tel"/>
            <button>Cancel</button><button onClick={()=> this.inviteUser()}>Invite</button>
            <br/>
            <br/>
            
            
            
            </div>
            </div>

        )
        }
    
}



export default Invite
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';
import '../styles/reset.css'
import '../styles/style.css'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

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
                
                <h1 className="heading_invite">Invite Travelers</h1>

           

             <Link to='/dashboard' className='buttons3'><RaisedButton label="Dashboard" primary={true} /></Link>

            <h3 style={{marginLeft:13}}className="h3">Input Number for Your Invitee</h3>

            <div className='list'>
            
            <input  ref="phoneNumber" hintText="Phone Number" type="number" pattern="0-9" maxlenght="10" minlength="10" style={{margin:25}}/>
            <br/>
            <br/>

        <div className="myButtons2">
            <Link to='/dashboard' className='buttons'><RaisedButton label="Done" primary={true} /></Link>
            <Link to='/dashboard' className='buttons'><RaisedButton label="Cancel" primary={true} /></Link>
            <RaisedButton style={{margin:5}} onClick={()=> this.inviteUser()} label="Submit" />
        </div>

            
            
            
            
            
            </div>
            </div>

        )
        }
    
}



export default InviteTravelers
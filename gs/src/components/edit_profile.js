import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/reset.css'
import '../styles/style.css'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import swal from 'sweetalert';



class EditProfile extends Component {


    saveUser = () => {  
        var newUserProps = {
            first_name: this.refs.firstName.value,
            last_name: this.refs.lastName.value,
            email: this.refs.email.value,
            phone_number: this.refs.phone.value,
            airport_code: this.refs.airCode.value
        }
        axios.put('/api/profile', newUserProps).then( res => {
             
                swal({
                    text: "Profile Update Successful!",
                    icon: "success",
                    button: "OK",
                  });
                
                    this.props.history.push('/dashboard')
            
        
            }
        )
    }

    


render() {
    return (

        <div>
            <h1 className="h1_sp1"></h1>

            <Link to='/dashboard' className='buttons3'><RaisedButton label="Dashboard" primary={true} /></Link>
    
            <h3 style={{margin:25,}}>Complete your profile.</h3>

            <div className='list1'>
                <br />
                <span className="h4">
                <h4></h4>
                <input ref='firstName' placeholder="Enter First Name" type="text" />
                <br />
                <h4></h4>
                <input ref='lastName' placeholder="Enter Last Name" type="text" />
                <br />
                <h4></h4>
                <input ref='email' placeholder="Enter E-mail Address" type="email" />
                <br />
                <h4></h4>
                <input ref='phone' placeholder="(Numbers Only)" type="tel" maxLength="10" />
                <br />
                <h4></h4>
                <input ref='airCode' placeholder="Enter Home Airport Code" type="text" maxLength="3" />
                <br />
                <br />
                <div className="buttons">
                <Link to='/dashboard' className='buttons3'><RaisedButton label="Cancel" primary={true} /></Link>
                <RaisedButton style={{margin:5}} onClick={() => this.saveUser()} label="Save" />
                <RaisedButton a href={process.env.REACT_APP_LOGOUT} label="Log Off" primary={true} />
                </div>
                </span>
                <br />
                <br />
            </div>

            <br />
            <br />
        </div>

    )
}

}

export default EditProfile
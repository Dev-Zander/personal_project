import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
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
            <h1>YOU ARE EDITING YOUR PROFILE!</h1>

            <Link to='/dashboard' className='buttons'> <button>Dashboard</button></Link>
            <br />
            <br />
            <a href={process.env.REACT_APP_LOGOUT}><button>LOG OUT</button></a>
            <h3>Please complete your profile.</h3>

            <div className='edit_profile'>
                <br />
                
                <h4>First Name</h4>
                <input ref='firstName' placeholder="Enter First Name" type="text" />
                <br />
                <h4>Last Name</h4>
                <input ref='lastName' placeholder="Enter Last Name" type="text" />
                <br />
                <h4>E-mail Address</h4>
                <input ref='email' placeholder="Enter E-mail Address" type="email" />
                <br />
                <h4>Phone Number</h4>
                <input ref='phone' placeholder="(Numbers Only)" type="tel" maxLength="10" />
                <br />
                <h4>Home Airport Code</h4>
                <input ref='airCode' placeholder="Enter Home Airport Code" type="text" maxLength="3" />
                <br />
                <br />
                <button>Cancel</button><button onClick={() => this.saveUser()}>Save</button>
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
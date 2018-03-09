import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class EditProfile extends Component {
    render() {
        return (

            <div>
                <h1>YOU ARE EDITING YOUR PROFILE!</h1>

                <Link to='/dashboard' className='buttons'> <button>Dashboard</button></Link>
                <br />
                <br />


                <div className='edit_profile'>
                    <br />
                    <br />
                    <br />
                    <h4>First Name</h4>
                    <input placeholder="Enter First Name" type="text" />
                    <br />
                    <h4>Last Name</h4>
                    <input placeholder="Enter Last Name" type="text" />
                    <br />
                    <h4>E-mail Address</h4>
                    <input placeholder="Enter E-mail Address" type="text" />
                    <br />
                    <h4>Phone Number</h4>
                    <input placeholder="Enter Phone Number (Numbers Only)" type="number" maxLength="10" />
                    <br />
                    <h4>Home Airport Code</h4>
                    <input placeholder="Enter Home Airport Code" type="text" maxLength="3"/>
                    <br />
                    <br/>
                    <button>Cancel</button><button>Save</button>
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
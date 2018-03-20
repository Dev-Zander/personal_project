import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Dashboard extends Component {

        componentDidMount() {
                axios.get('/api/user').then((res) => {
                        if(!res.data.phone_number){
                                this.props.history.push('/edit_profile')
                        }
                        console.log(res.data)
                })
        }



        render() {
                return (


                        <div>
                                <h1>YOU ARE ON YOUR DASHBOARD!</h1>
                                <Link to='/edit_profile' className='buttons'> <button>Edit Profile</button></Link>
                                <br />
                                <br />
                                <Link to='/new_trip' className='buttons'> <button>Create New Trip</button></Link>

                        </div>



                )
        }

}

export default Dashboard
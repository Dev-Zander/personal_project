import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UpcomingTrips from './upcoming_trip'


class Dashboard extends Component {
        constructor(props) {
                super(props)
                this.state = {
                        userid:''
                }
        }

        componentDidMount() {
                axios.get('/api/user').then((res) => {
                        if (!res.data.phone_number) {
                                this.props.history.push('/edit_profile')
                        }
                        let newUserID = res.data.id
                        this.setState({
                                userid:newUserID
                                
                        })
                     
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

                                <br />
                                <br />
                                <br />
                                <br />
                                <UpcomingTrips userID = {this.state.userid}/>




                        </div>



                )
        }

}

export default Dashboard
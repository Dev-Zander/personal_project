import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UpcomingTrips from './upcoming_trip'
import InvitedTrips from './invited_trips'
import '../styles/dashboard.css'




class Dashboard extends Component {



        constructor(props) {
                super(props)
                this.state = {
                        userid: '',
                        username: '',
                        phonenumber: ''
                }


        }

        componentWillMount() {
                axios.get('/api/user').then((res) => {
                        if (!res.data.phone_number) {
                                this.props.history.push('/edit_profile')
                        }
                        let newUserID = res.data.id
                        let firstname = res.data.first_name
                        let userPhone = res.data.phone_number


                        this.setState({

                                userid: newUserID,
                                username: firstname,
                                phonenumber: userPhone

                        })

                })
        }



        render() {

                return (



                        <div classname="list">
                                <div class="col span_1_of_4">
                                        <h1>Welcome to your Dashboard {this.state.username}</h1>
                                </div>
                                <div class="col span_2_of_4">
                                        <a href={process.env.REACT_APP_LOGOUT}><button>LOG OUT</button></a>
                                        <Link to='/edit_profile' className='buttons'> <button>Edit Profile</button></Link>
                                        <br />
                                        <br />
                                        <Link to='/new_trip' className='buttons'> <button>Create New Trip</button></Link>
                                </div>
                                <div class="col span_3_of_4">
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <UpcomingTrips userID={this.state.userid} />
                                </div>
                                <div class="col span_4_of_4">
                                        <InvitedTrips userPhone={this.state.phonenumber} userID={this.state.userid} />
                                </div>





                        </div>



                )
        }

}

export default Dashboard
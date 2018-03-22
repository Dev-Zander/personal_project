import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UpcomingTrips from './upcoming_trip'
import InvitedTrips from './invited_trips'


class Dashboard extends Component {
        tracker = (userid,tripid) => {
                []
        }

        constructor(props) {
                super(props)
                this.state = {
                        userid:'',
                        username:''
                }
        }

        componentDidMount() {
                axios.get('/api/user').then((res) => {
                        if (!res.data.phone_number) {
                                this.props.history.push('/edit_profile')
                        }
                        let newUserID = res.data.id
                        let firstname = res.data.first_name
                        this.setState({
                                userid:newUserID,
                                username: firstname
                        })
                     
                })
        }



        render() {
               
                return (


                        <div>
                                <h1>Welcome to your Dashboard {this.state.username}</h1>
                                <Link to='/edit_profile' className='buttons'> <button>Edit Profile</button></Link>
                                <br />
                                <br />
                                <Link to='/new_trip' className='buttons'> <button>Create New Trip</button></Link>

                                <br />
                                <br />
                                <br />
                                <br />
                                <UpcomingTrips userID = {this.state.userid}/>

                                <InvitedTrips/>

                                




                        </div>



                )
        }

}

export default Dashboard
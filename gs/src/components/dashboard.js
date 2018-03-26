import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UpcomingTrips from './upcoming_trip'
import InvitedTrips from './invited_trips'
import '../styles/style.css'
import RaisedButton from 'material-ui/RaisedButton';




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



                        <div className="list">
                                <div className="span_1_of_4">
                                        <h1>Welcome to your Dashboard {this.state.username}</h1>
                                </div>
                                <div className="span_2_of_4">
                                <RaisedButton a href={process.env.REACT_APP_LOGOUT} label="Log Off" primary={true} />
                
                                <Link to='/edit_profile' className='buttons'><RaisedButton label="Edit Profile" primary={true} /></Link>
                        
        
                                <Link to='/new_trip' className='buttons'><RaisedButton label="New Trip" primary={true} /></Link>
                                         
                                </div>
                                <div className="span_3_of_4">
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <UpcomingTrips userID={this.state.userid} />
                                </div>
                                <div className="span_4_of_4">
                                        <InvitedTrips userPhone={this.state.phonenumber} userID={this.state.userid} />
                                </div>





                        </div>



                )
        }

}

export default Dashboard
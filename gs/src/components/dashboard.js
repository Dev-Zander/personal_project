import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UpcomingTrips from './upcoming_trip'
import InvitedTrips from './invited_trips'
import '../styles/style.css'
import RaisedButton from 'material-ui/RaisedButton';
import StripeCheckout from 'react-stripe-checkout';




class Dashboard extends Component {



        constructor(props) {
                super(props)
                this.state = {
                        userid: '',
                        username: '',
                        phonenumber: '',
                        amount: 25000
                }


        }

        onToken = token => {
                console.log('token', token);
                token.card = void 0;
                const { amount } = this.state
                axios.post('/api/payment', { token, amount })
                  .then(charge => { console.log('charge response', charge.data) })
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




                        <div className="list1">

                      
                
                               <div> <StripeCheckout
                                        token={this.onToken}
                                        stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
                                        amount={this.state.amount}
                                /></div>

                                <div className="span_1_of_4">
                                        <h1 className="h1_sp1">Welcome to your Dashboard {this.state.username}</h1>
                                </div>
                                <div className="span_2_of_4">
                                        <RaisedButton a href={process.env.REACT_APP_LOGOUT} label="Log Off" primary={true} />

                                        <Link to='/edit_profile' className='buttons'><RaisedButton label="Edit Profile" primary={true} /></Link>


                                        <Link to='/new_trip' className='buttons'><RaisedButton label="New Trip" primary={true} /></Link>

                                </div>
                                <div className="span_3_of_4">
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
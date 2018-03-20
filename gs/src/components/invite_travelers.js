import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Invite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            list: []

        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleNameChange(event) {
        console.log(this.state.name)
        this.setState({ name: event.target.value });


    }
    handleEmailChange(event) {
        console.log(this.state.email)
        this.setState({ email: event.target.value })

    }

    handleSubmit(event) {
        event.preventDefault();
        let newName = this.state.name;
        let newEmail = this.state.email;
        let oldList = this.state.list;
        this.setState({
            list: [...oldList, {name: newName, email: newEmail}],
            name: '',
            email: ''
        })
    }
    render() {
        let listDisplay = this.state.list.map((item, index) => <p key={index} > {`Name: ${item.name} Email: ${item.email}`} </p>)
        return (

            <div>

                <Link to='/dashboard' className='buttons'> <button>Dashboard</button></Link>

                <h1>I am the Invite Travelers!</h1>


                <div className='invite_travelers'>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <h4>Name</h4>
                            <input value={this.state.name} onChange={this.handleNameChange} placeholder="Invitee Name" type="text" />

                            <h4>E-mail Address</h4>
                            <input value={this.state.email} onChange={this.handleEmailChange} placeholder="Enter E-mail Address" type="text" />
                            <br />
                        </label>
                        <br />
                        <button>Cancel</button>
                        <button type="submit" value = "submit">Add</button>

                    </form>


                </div>
                {listDisplay}
                
                { listDisplay.length ? 
                <button type="submit" value = "submit">Submit</button> : null
                
            }

            </div>
        )
    }

}

export default Invite
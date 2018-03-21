import React, { Component } from 'react';

class Home extends Component {
    render() {
       
        return (
<div>
            <a href="http://localhost:3210/auth"><button>SIGN IN</button></a>
            <br/>
            <a href="https://black-panther.auth0.com/v2/logout"><button>LOG OUT</button></a>
</div>
        )
    }

}

export default Home
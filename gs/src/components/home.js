import React, { Component } from 'react';

class Home extends Component {
    render() {
       
        return (
<div>
            <a href="http://localhost:3210/auth"><button>SIGN IN</button></a>
            <br/>
            <a href='http://localhost:3210/api/signout'><button>LOG OUT</button></a>
</div>
        )
    }

}

export default Home
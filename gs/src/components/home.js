import React, { Component } from 'react';

class Home extends Component {
    render() {
       
        return (
<div>
            <a href={process.env.REACT_APP_LOGIN}><button>SIGN IN</button></a>
            <br/>
            <a href={process.env.REACT_APP_LOGOUT}><button>LOG OUT</button></a>
</div>
        )
    }

}

export default Home
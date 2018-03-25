import '../styles/home.css'
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import '../media/homeimage.jpg'

class Home extends Component {
    render() {

        return (

            <div className="home">


            
                   <div className="buttons"><RaisedButton  href={process.env.REACT_APP_LOGIN} label="LOGIN" primary={true} /></div>

                    

                    <div className="buttons"><RaisedButton  href={process.env.REACT_APP_LOGOUT} label="LOGOUT" primary={false} />
                    </div> 
            
            </div>
        )
    }

}

export default Home
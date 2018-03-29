import '../styles/style.css'
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import '../media/homeimage.jpg'
import axios from 'axios';

class Home extends Component {


    // handleLoginClick(){
    //      axios.get('api/loggedIn')
    //      .then((res)=>{
    //          console.log(res)
    //      })

    //     console.log(res)
    // }

    render() {

        return (

            <div className="home">

            
      <div class="banner">
        
          <span class="title">Go SomeWhere</span>
    
      </div>
    

<section id="buttons">
            
                   <div className="button"><RaisedButton  href={process.env.REACT_APP_LOGIN} label="SIGN IN" primary={true} /></div>
                    <br/>
                    <div className="button">
                    <RaisedButton onClick={() =>this.handleLoginClick()} label="SIGN IN 2"/>
                    </div>

                    
                    </section>
            
            </div>
        )
    }

}

export default Home
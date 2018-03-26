import '../styles/style.css'
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import '../media/homeimage.jpg'

class Home extends Component {
    render() {

        return (

            <div className="home">

            
      <div class="banner">
        
          <span class="title">Go SomeWhere</span>
    
      </div>
    

<section id="buttons">
            
                   <div className="button"><RaisedButton  href={process.env.REACT_APP_LOGIN} label="SIGN IN" primary={true} /></div>

                    

                    
                    </section>
            
            </div>
        )
    }

}

export default Home
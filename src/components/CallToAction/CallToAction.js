import React, { Component } from 'react';
import './CallToAction.css'

class CallToAction extends Component {
  state = {  }
  render() { 
    return ( 
      <a href ='mailto:bobnearents@gmail.com'>
        <button className= 'hvr-shutter-in-horizontal callToAction'>
          Contact Me
        </button>
      </a>
     );
  }
}
 
export default CallToAction;
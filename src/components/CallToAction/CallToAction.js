import React, { Component } from 'react';
import './CallToAction.css'

class CallToAction extends Component {
  state = {  }
  render() { 
    return ( 
      <a href ='mailto:bobnearents@gmail.com'>
        <button className = 'callToAction'>
          Let's Talk
        </button>
      </a>
     );
  }
}
 
export default CallToAction;
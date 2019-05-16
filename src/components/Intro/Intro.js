import React, { Component } from 'react';
import Description from '../Description/Description'
import './Intro.css'
import logo from '../../assets/logo-opaque.png'
import CallToAction from '../CallToAction/CallToAction';

class Intro extends Component {

  render() { 
    return (
      
        <div className ='introContainer'> 
          <div className='intro'>
            <h1>
              <p>Greetings,</p>
              <p>I'm <span className='name'>Bob</span> Nearents,</p>
              <Description />
            </h1>
          </div>
          <div className ='button'>
            <CallToAction />
          </div>
        </div>
        
     );
  }
}
 
export default Intro;
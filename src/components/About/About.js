import React, { Component } from 'react';
import logo from '../../assets/logo-opaque.png'
import './About.css'

class About extends Component {
  state = {  }
  render() { 
    return (
      <div className='aboutContainer'>
        <div className='about'>
          
          <h2>About</h2>
          <p>
            With work experience ranging from manufacturing to corporate sales, I've had practice solving a diverse array of problems. In any situation of life I strive to be learning something. Whether it be rules to a new board game, or the latest Javascript library. I thrive when I'm working with a team of passionate people who care about the quality of their work.
          </p>
        </div>
      </div>
    );
  }
}
 
export default About;
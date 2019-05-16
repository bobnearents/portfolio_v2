import React, { Component } from 'react';
import './Project.css';

class Project extends Component {
  state = {  }
  render() { 
    return ( 
      <div className = 'project'>
        <li>
          <h3>{this.props.name}</h3>
        </li>
        <li>
          <a href={this.props.live}><img src={this.props.screenshot} alt="" width="400" /></a>
        </li>
        <li class="desc">{this.props.desc}</li>
        <div className = 'projectButtons'>
          <a href={this.props.live}><button className = 'projectButton callToAction hvr-shutter-in-horizontal '>Live Demo</button></a>
          <a href={this.props.github}><button className = 'projectButton callToAction hvr-shutter-in-horizontal '>Github</button></a>
        </div>
      </div>
     );
  }
}
 
export default Project;
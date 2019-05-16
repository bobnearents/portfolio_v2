import React, { Component } from 'react';
import './ProjectList.css';
import Project from '../Project/Project';

class ProjectsList extends Component {
  state = {  }
  render() { 
    return ( 
      <div className = 'projectsContainer'>
        <div className = 'projectsHeader'>
          <h2>
            Projects
          </h2>
        </div>
        <div className = 'projectList'>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
          
        </div>
      </div>
     );
  }
}
 
export default ProjectsList;
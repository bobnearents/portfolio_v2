import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import './Sider.css'
import logo from '../../assets/logo-opaque.png'

class Sider extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 

    return ( 
      <div className = 'sidebar'>
        <Link to ='/' className = 'logo color-block'/>
        <nav className = 'nav-icons'>

          <div className= 'home-icon'>
            <Link to ='/'>
              <span>
                <span className={`${(this.props.path === '/') ? 'selected' : null} iconify`} data-icon="simple-line-icons:home" data-inline="false" />
              </span>
            </Link>
          </div>
          <div className= 'about-icon'>
            <Link to ='/about'>
              <span>
                <span className={`${(this.props.path === '/about') ? 'selected' : null} iconify`} data-icon="simple-line-icons:user" data-inline="false"></span>
              </span>
            </Link>
          </div>
          <div className= 'my-work-icon'>
            <Link to ='projects'>
              <span>
                <span className={`${(this.props.path === '/projects') ? 'selected' : null} iconify`} data-icon="simple-line-icons:note" data-inline="false"></span>
              </span>
            </Link>
          </div>
          <div className= 'resume-icon'>
            <Link to ='resume'>
              <span>
                <span className={`${(this.props.path === '/resume') ? 'selected' : null} iconify`} data-icon="simple-line-icons:book-open" data-inline="false"></span>
              </span>
            </Link>
          </div>
        </nav>  
        <footer className = 'contact-icons'>
          <a href= 'https://www.linkedin.com/in/bobnearents/'><span className="iconify" data-icon="simple-line-icons:social-linkedin" data-inline="false"></span></a>
          <a href ='mailto:bobnearents@gmail.com'><span className="iconify" data-icon="simple-line-icons:envelope" data-inline="false"></span></a>
          <a href='https://github.com/bobnearents'><span className="iconify" data-icon="simple-line-icons:social-github" data-inline="false"></span></a>
        </footer>
      </div> 
    );
  }
}
 
export default withRouter(Sider);
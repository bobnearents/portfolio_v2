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
    let path = this.props.location.pathname
    console.log(path)
    return ( 
      <div className = 'sidebar'>
        <img className = 'logo' src = {logo} />
        <nav className = 'nav-icons'>

          <div className= 'home-icon'>
            <Link to ='/'>
              <span>
                <span className={`${(path === '/') ? 'selected' : null} iconify`} data-icon="simple-line-icons:home" data-inline="false" />
              </span>
            </Link>
          </div>
          <div className= 'about-icon'>
            <Link to ='/about'>
              <span>
                <span className="iconify" data-icon="simple-line-icons:user" data-inline="false"></span>
              </span>
            </Link>
          </div>
          <div className= 'my-work-icon'>
            <Link to ='projects'>
              <span>
                <span className="iconify" data-icon="simple-line-icons:note" data-inline="false"></span>
              </span>
            </Link>
          </div>
          <div className= 'resume-icon'>
            <Link to ='resume'>
              <span>
                <span className="iconify" data-icon="simple-line-icons:book-open" data-inline="false"></span>
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
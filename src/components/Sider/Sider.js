import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import './Sider.css'

class Sider extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      path:this.props.location.pathname
     }
  }

  setPath = (path) =>{
    this.setState({
      path: path
    })
  }

  render() { 
    console.log(this.state.path)
    return ( 
      <div className = 'sidebar'>
        <Link to ='/' className = 'logo color-block'/>
        <nav className = 'nav-icons'>

          <div className= 'home-icon'>
            <Link onClick={() => this.setPath('/')} to ='/'>
              <span className={(this.state.path === '/') ? 'selected' : '/'}>
                <span className= 'iconify' data-icon="simple-line-icons:home" data-inline="false" />
              </span>
            </Link>
          </div>
          <div className= 'about-icon'>
            <Link onClick={() => this.setPath('/about')} to ='/about'>
              <span className={(this.state.path === '/about') ? 'selected' : ''}>
                <span  className = 'iconify' data-icon="simple-line-icons:user" data-inline="false"></span>
              </span>
            </Link>
          </div>
          <div className= 'my-work-icon'>
            <Link onClick={() => this.setPath('/projects')} to ='projects'>
              <span className={(this.state.path === '/projects') ? 'selected' : ''}>
                <span className = 'iconify' data-icon="simple-line-icons:note" data-inline="false"></span>
              </span>
            </Link>
          </div>
          {/* <div className= 'resume-icon'>
            <Link to ='resume'>
              <span>
                <span className={`${(this.props.path === '/resume') ? 'selected' : null} iconify`} data-icon="simple-line-icons:book-open" data-inline="false"></span>
              </span>
            </Link>
          </div> */}
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
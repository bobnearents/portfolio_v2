import React, { Component } from 'react';
import './Header.css'
import { Link } from 'react-router-dom'

class Header extends Component {
  state = {  }

  handleClickShow = () => {
    document.getElementById('mobile-icons').style.visibility = 'visible';
    document.getElementById('mobile-icons').style.opacity = 1;
    document.getElementById('lines').style.display = 'none'
    document.getElementById('x').style.display = 'initial'
    if (document.getElementById('projectsHeader')){
      document.getElementById('projectsHeader').style['margin-top']='200px'
    }
  }


  handleClickHide = () => {
    document.getElementById('mobile-icons').style.opacity = 0;
    document.getElementById('mobile-icons').style.visibility = 'hidden';
    document.getElementById('lines').style.display = 'initial'
    document.getElementById('x').style.display = 'none'
    if (document.getElementById('projectsHeader')) {
      document.getElementById('projectsHeader').style['margin-top'] = '100px'
    }
  }

  render() { 
    return ( 
      <>
      <div className = 'mobileHeader'>
        <Link onClick={this.handleClickHide} to ='/' className = 'logo color-block mobile'/>
        <span id = 'lines' onClick={this.handleClickShow} >
          <span class="iconify lines"  data-icon="simple-line-icons:menu" data-inline="false"></span>
        </span>
        <span id = 'x' onClick={this.handleClickHide} >
            <span class="iconify x" data-icon="simple-line-icons:close" data-inline="false"></span>
        </span>
      </div>
      <div className = 'mobile-icons' id ='mobile-icons'>
        <div className = 'nav-icons-mobile'>
          <div >
            <Link onClick={this.handleClickHide} to='/'>
              <span>
                <span className={`${(this.props.path === '/') ? 'selected' : null} iconify`} data-icon="simple-line-icons:home" data-inline="false" />
              </span>
            </Link>
          </div>
          <div >
            <Link onClick={this.handleClickHide} to='/about'>
              <span>
                <span className={`${(this.props.path === '/about') ? 'selected' : null} iconify`} data-icon="simple-line-icons:user" data-inline="false"></span>
              </span>
            </Link>
          </div>
          <div >
            <Link onClick={this.handleClickHide} to='projects'>
              <span>
                <span className={`${(this.props.path === '/projects') ? 'selected' : null} iconify`} data-icon="simple-line-icons:note" data-inline="false"></span>
              </span>
            </Link>
          </div>
        </div>
        <div className='contact-icons-mobile'>
          <p>Contact:</p>
          <a href='https://www.linkedin.com/in/bobnearents/'><span className="iconify" data-icon="simple-line-icons:social-linkedin" data-inline="false"></span></a>
          <a href='mailto:bobnearents@gmail.com'><span className="iconify" data-icon="simple-line-icons:envelope" data-inline="false"></span></a>
          <a href='https://github.com/bobnearents'><span className="iconify" data-icon="simple-line-icons:social-github" data-inline="false"></span></a>
        </div>
      </div>
      </>
     );
  }
}
 
export default Header;
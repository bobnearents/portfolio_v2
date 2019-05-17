import React, { Component } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

class Header extends Component {
  state = { 
    path:this.props.location.pathname,
    mobileMenu:false
   }

   setPath = (path) => {
    this.setState({
      path
    })
   }

  handleClick = () => {
    if (!this.state.mobileMenu) {
      this.setState({
        mobileMenu:true
      })
      document.getElementById('mobile-icons').style.top = '100px';
      if (document.getElementById('projectsHeader')){
        document.getElementById('projectsHeader').style['margin-top']='220px'
      }

      document.getElementById("first").classList.add("first", "stretcher");
      document.getElementById("second").classList.add("second");
      document.getElementById("third").classList.add("third", "stretcher");

      setTimeout(() => {
        document.getElementById("first").classList.remove("stretcher");
        document.getElementById("third").classList.remove("stretcher");
      }, 1500)
    }
    else{
      this.setState({
        mobileMenu:false
      })
      this.handleHide()
      document.getElementById("first").classList.remove("first");
      document.getElementById("second").classList.remove("second");
      document.getElementById("third").classList.remove("third");
      document.getElementById("first").classList.add("stretcher");
      document.getElementById("second").classList.add("stretcher");
      document.getElementById("third").classList.add("stretcher");
      setTimeout(() => {
        document.getElementById("first").classList.remove("stretcher");
        document.getElementById("second").classList.remove("stretcher");
        document.getElementById("third").classList.remove("stretcher");
      }, 1500)
    }
  }


  handleHide = () => {
    document.getElementById('mobile-icons').style.top = '-100px';
    if (document.getElementById('projectsHeader')) {
      document.getElementById('projectsHeader').style['margin-top'] = '130px'
    }
  }

  render() { 
    return ( 
      <>
      <div className = 'mobileHeader'>
        <Link onClick={this.handleClick} to ='/' className = 'logo color-block mobile'/>
        <span id = 'lines' onClick={ () => {
          this.handleClick()}} >
          <div class='line' id='first'></div>
          <div class='line' id='second'></div>
          <div class='line' id='third'></div>
        </span>
      </div>
      <div className = 'mobile-icons' id ='mobile-icons'>
        <div className = 'nav-icons-mobile'>
          <div >
            <Link onClick={ () => {
                this.setPath('/')
                this.handleClick()
              }
            } to='/'>
              <span>
                <span className = {(this.state.path === '/') ? 'selected' : ''} >home</span>
              </span>
            </Link>
          </div>
          <div >
            <Link onClick={() => {
              this.setPath('/about')
              this.handleClick()
            }
            } to='/about'>
              <span>
                <span className = {(this.state.path === '/about') ? 'selected' : ''}>about</span>
              </span>
            </Link>
          </div>
          <div >
            <Link onClick={ () => {
                this.setPath('/projects')
                this.handleClick()
              }
            } to='/projects'>
              <span>
                <span className = {(this.state.path === '/projects') ? 'selected' : ''}>projects</span>
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
 
export default withRouter(Header);
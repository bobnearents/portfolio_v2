import React,{ Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Sider from '../Sider/Sider';
import Header from '../Header/Header'
import MainPage from '../../routes/MainPage';
import AboutPage from '../../routes/AboutPage'
import ProjectsPage from '../../routes/ProjectsPage';
import ResumePage from '../../routes/ResumePage'
import logo from '../../assets/logo-opaque.png'
import './App.css';

function App({location}) {

    return (

        <div className="App">
          <img id = 'logo' src={logo} />
        <Header />
        <Sider />
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames={'fade'}
          >
            <section className="route-section">
              <Switch location = {location}>
                <Route exact path={"/"} component={MainPage} />
                <Route path={"/about"} component={AboutPage} />
                <Route path={"/projects"} component={ProjectsPage} />
                <Route path={"/resume"} component={ResumePage} />
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
        
        </div>

    );
  }


export default withRouter(App);

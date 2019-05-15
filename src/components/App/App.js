import React,{ Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import MainPage from '../../routes/MainPage';
import AboutPage from '../../routes/AboutPage'
import ProjectsPage from '../../routes/ProjectsPage';
import ResumePage from '../../routes/ResumePage'
import Sider from '../Sider/Sider'
import './App.css';
import 'animate.css';

class App extends Component {
  render(){
  const value = {
    
  };
    return (

        <div className="App">
          <Sider /> 
          <Route exact path={"/"} component={MainPage} />
          <Route path={"/about"} component={AboutPage} />
          <Route path={"/projects"} component={ProjectsPage} />
          <Route path={"/resume"} component={ResumePage} />
        </div>

    );
  }
}

export default App;

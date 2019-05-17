import React, { Component } from "react";
import Intro from "../components/Intro/Intro";
import CallToAction from "../components/CallToAction/CallToAction";
import Sider from "../components/Sider/Sider";


class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <>
      
      <Intro/>
      </>
    );
  }
}

export default MainPage;

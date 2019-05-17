import React, { Component } from "react";
import Sider from "../components/Sider/Sider";
import About from "../components/About/About";


class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>

        <About/>
      </>
    );
  }
}

export default AboutPage;

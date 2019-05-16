import React, { Component } from "react";
import Sider from "../components/Sider/Sider";


class ResumePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Sider path={this.props.location.pathname} />
      </>
    );
  }
}

export default ResumePage;

import React, { Component } from "react";
import Sider from "../components/Sider/Sider";
import ProjectList from "../components/ProjectList/ProjectList";



class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Sider path={this.props.location.pathname} />
        <ProjectList/>
      </>
    );
  }
}

export default ProjectsPage;

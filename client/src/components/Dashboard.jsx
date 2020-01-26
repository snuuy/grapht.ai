import React, { Component } from "react";
import NavBar from "./NavBar";
import TopBar from "./TopBar";

class DashBoard extends Component {
  state = {};

  render() {
    return (
      <div>
        <TopBar></TopBar>
        <NavBar></NavBar>
      </div>
    );
  }
}

export default DashBoard;

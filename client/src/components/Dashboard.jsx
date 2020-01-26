import React, { Component } from "react";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import CardView from "./CardView";
class DashBoard extends Component {
  state = {};

  render() {
    return (
      <div>
        <TopBar></TopBar>
        <NavBar></NavBar>
        <CardView></CardView>
      </div>
    );
  }
}

export default DashBoard;

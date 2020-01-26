import React, { Component } from "react";

class TopBar extends Component {
  state = {};

  render() {
    return (
      <div className="topbar">
        <img className="logo" src={require("../assets/logo.png")}></img>
      </div>
    );
  }
}

export default TopBar;

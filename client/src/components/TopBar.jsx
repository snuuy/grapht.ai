import React, { Component } from "react";

class TopBar extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="topbar">
          <img className="logo" src={require("../assets/logo.png")}></img>
        </div>
        <div className="bgcolor"></div>
      </div>
    );
  }
}

export default TopBar;

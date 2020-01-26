import React, { Component } from "react";

class TopBar extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-2 py-4 text-center" style={{background:"#394279"}}>
          <img className="w-75 mx-auto" src={require("../assets/logo.png")}></img>
        </div>
        <div className="col-10" style={{background:"#F1AD40"}}>

        </div>
      </div>
    );
  }
}

export default TopBar;

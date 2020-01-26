import React, { Component } from "react";

class TopBar extends Component {

  render() {
    return (
<<<<<<< HEAD
      <div>
        <div className="topbar">
          <img className="logo" src={require("../assets/logo.png")}></img>
        </div>
        <div className="bgcolor"></div>
=======
      <div className="row">
        <div className="col-2 py-4 text-center" style={{background:"#394279"}}>
          <img className="w-75 mx-auto" src={require("../assets/logo.png")}></img>
        </div>
        <div className="col-10" style={{background:"#F1AD40"}}>

        </div>
>>>>>>> 1a99ecea0ebd41e5b60f83e61f5e19aedf7c25d2
      </div>
    );
  }
}

export default TopBar;

import React, { Component } from "react";
import icon_home from "../assets/icons/home_navy.png";
import icon_reports from "../assets/icons/reports.png";

var navColor = "red";

class NavBar extends Component {
  state = {};

  render() {
    return (
        <div className="p-4 px-5 h-100 text-white" style={{background:"#252C56"}}>
          <div className="font-weight-bold mb-3">
            Overview
          </div>
          <div className="p-2 rounded text-center" style={{background:"#F1AD40"}}>
            <img className="d-inline-block iconFormat align-middle" src={icon_home}/>
            <div className="d-inline-block ml-2  color-purple align-middle" style={{background:"#F1AD40"}}>Dashboard</div>
          </div>
          <div className="p-2 rounded text-center bg-white">
            <img className="d-inline-block iconFormat align-middle" src={icon_reports}/>
            <div className="d-inline-block ml-2  color-purple align-middle" style={{background:"#F1AD40"}}>Dashboard</div>
          </div>
        </div>
    );
  }
}

export default NavBar;

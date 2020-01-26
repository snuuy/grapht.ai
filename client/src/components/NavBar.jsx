import React, { Component } from "react";
import icon_home from "../assets/icons/home_navy.png";
import icon_reports from "../assets/icons/reports.png";
import icon_explore from "../assets/icons/explore.png";
import icon_search from "../assets/icons/search.png";

var navColor = "red";

class NavBar extends Component {
  state = {};

  render() {
    return (
      <div
        className="p-4 px-5 h-100 text-white"
        style={{ background: "#252C56" }}
      >
        <div className="font-weight-bold mb-3">Overview</div>
        <div
          className="p-1 rounded cursor-hand text-center mb-2"
          style={{ background: "#F0B556" }}
        >
          <img
            className="d-inline-block iconFormat align-middle"
            src={icon_home}
          />
          <div className="d-inline-block ml-2  color-purple align-middle">
            Dashboard
          </div>
        </div>
        <div
          className="p-1 rounded cursor-hand text-center"
          style={{ background: "#394279" }}
        >
          <img
            className="d-inline-block iconFormat align-middle"
            src={icon_reports}
          />
          <div className="d-inline-block ml-2 text-white align-middle">
            View Reports
          </div>
        </div>

        <div className="font-weight-bold mb-3 mt-5">Explore</div>
        <div
          className="p-1 rounded cursor-hand text-center mb-2"
          style={{ background: "#394279" }}
        >
          <img
            className="d-inline-block iconFormat align-middle"
            src={icon_search}
          />
          <div className="d-inline-block ml-2 text-white align-middle">
            Custom search
          </div>
        </div>
        <div
          className="p-1 rounded cursor-hand text-center"
          style={{ background: "#394279" }}
        >
          <img
            className="d-inline-block iconFormat align-middle"
            src={icon_explore}
          />
          <div className="d-inline-block ml-2 text-white align-middle">
            What's new
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;

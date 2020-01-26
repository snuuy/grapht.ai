import React, { Component } from "react";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import CardView from "./CardView";
import Upload from "./Upload";
class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: localStorage.getItem("userType")
    };
  }

  render() {
    return (
      <div>
        <TopBar userType={this.state.userType} />
        <div className="row">
          <div className="col-2 p-0" style={{ height: "calc(100vh - 83px)" }}>
            <NavBar userType={this.state.userType} />
          </div>

          <div className="col-10 bg-white">
            <div className="row">
              <div className="col-3 pt-4 pr-0 pl-4">
                <Upload />
              </div>
              <div className="col-9 px-4">
                <CardView />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;

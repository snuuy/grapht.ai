import React, { Component } from "react";

class TopBar extends Component {
  render() {
    return (
      <div className="row">
        <div
          className="col-2 py-4 text-center"
          style={{ background: "#394279" }}
        >
          <img
            className="w-75 mx-auto"
            src={require("../assets/logo.png")}
          ></img>
        </div>
        <div className="col-10" style={{ background: "#394279" }}>
          <div className="mt-4 float-right mr-4">
            <div
              className="text-white font-weight-bold text-center p-1 d-inline-block mr-2"
              style={{
                borderRadius: "50%",
                width: "35px",
                height: "35px",
                background: "#F1AD40"
              }}
            >
              ZR
            </div>
            <div className="text-white text-shadow font-weight-bold d-inline-block">
              Zackary Ren
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;

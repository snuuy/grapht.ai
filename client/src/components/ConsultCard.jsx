import React, { Component } from "react";
import fillerimg from "../assets/fillerimg.png";
import scale from "../assets/scale.png";
import Scale from "./Scale";

class ConsultCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {}
    };
  }

  render() {
    return (
      <div>
        <div className="row pl-4 pt-2">
          <div className="col-12">
            <div className="card mr-3 mt-3 pb-3">
              <div className="card-header cardTitle">Grapht #000123</div>
              <div className="row mt-4 ml-4 mb-0 pb-0">
                <div className="col-4 m-0 px-4 pb-0">
                  <img
                    className="cardImg img-thumbnail"
                    style={{ maxWidth: "100%" }}
                    src={
                      "data:" +
                      this.props.results.grapht.type +
                      ";base64," +
                      this.props.results.grapht.image
                    }
                  ></img>
                </div>
                <div className="col-4 text-left mt-2">
                  <div className="row">
                    <p className="firstCardText">Dr. Lin's Diagnosis</p>
                  </div>
                  <div className="row secondCardText">
                    <p>Nevus</p>
                  </div>
                  <div className="row thirdCardText">
                    <button type="button" class="btn btn-secondary btnText">
                      Read more about this condition
                    </button>
                  </div>
                  <div className="row pt-3">
                    <p className="firstCardText">Grapht AI Major Prediction:</p>
                  </div>
                  <div className="row secondCardText">
                    <p>Nevus</p>
                  </div>
                  <div className="row thirdCardText">
                    <button type="button" class="btn btn-secondary btnText">
                      Read more about this condition
                    </button>
                  </div>
                </div>
                <div className="col-4">
                  <div className="m-0">
                    <div className="row">
                      <p className="firstCardText ml-4">Diagnosed By:</p>
                    </div>
                    <div
                      className="text-white font-weight-bold text-center p-1 d-inline-block mr-2 row"
                      style={{
                        borderRadius: "50%",
                        width: "200px",
                        height: "200px",
                        background: "#44A345"
                      }}
                    >
                      <p className="vertText mt-3">LL</p>
                    </div>
                    <div className="row">
                      <p className="firstCardText consultText mt-1 ml-5 mb-0">
                        LongXi Lin
                      </p>
                    </div>
                    <div className="row">
                      <p className="firstCardText consultText mt-0 ml-2">
                        M.D Sunnybrook
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConsultCard;

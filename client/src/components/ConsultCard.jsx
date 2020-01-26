import React, { Component } from "react";
import fillerimg from "../assets/fillerimg.png";
import scale from "../assets/scale.png";
import Scale from "./Scale";

class ConsultCard extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="row pl-4 m-auto pt-2">
          <div className="col-md-12">
            <div className="card mr-3 mt-3 pb-3 w-100">
              <div className="card-header cardTitle">Grapht #000123</div>
              <div className="row mt-4 ml-4 mb-0 pb-0">
                <div className="col-5 m-0 px-4 pb-5">
                  <img
                    className="cardImg img-thumbnail"
                    style={{ width: "100%" }}
                    src={fillerimg}
                  ></img>
                </div>
                <div className="col-7 text-left mt-4">
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
                </div>
              </div>
              <div className="row">
                <p className="col-12 text-center mx-auto fourthCardText">
                  Confidence
                </p>
              </div>
              <div className="row ml-3 mr-5 pt-3 cardbox h-100">
                <div>
                  <img className="scale" src={scale}></img>
                </div>
              </div>
              <div className="ml-5 mt-3 pb-0">
                <div className="row">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConsultCard;

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
        <div className="row pt-2">
          <div className="col-12">
            <div className="card mr-3 mt-3 pb-5">
            <div className="card-header cardTitle">Grapht #{this.props.results.grapht.id.slice(18).toUpperCase()}</div>
              <div className="row mt-4 ml-4 mb-0 pb-0">
                <div className="col-4 m-0 pb-0">
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
                    <p className="col-12 px-0">{this.props.results.grapht.doctorDiagnosis.condition}</p>
                    <div className="text-muted h6 col-12 px-0">{Math.round(parseFloat(this.props.results.grapht.doctorDiagnosis.confidence))}% confidence</div>
                  </div>
                  <div className="row thirdCardText">
                    <button type="button" class="btn btn-secondary btnText">
                      Read more
                    </button>
                  </div> 
                  
                <div style={{transform:"scale(0.8)", marginLeft:"-30px"}}>
                  <div className="row pt-3">
                    <p className="text-muted h6">Grapht AI Prediction:</p>
                  </div>
                  <div className="row color-purple h4">
                  <p className="col-12 px-0">{this.props.results.grapht.aiDiagnosis.condition}</p>
                    <div className="text-muted h6 col-12 px-0">{Math.round(parseFloat(this.props.results.grapht.aiDiagnosis.confidence)*100)}% confidence</div>
                  </div>
                  <div className="row thirdCardText">
                    <button type="button" class="btn btn-secondary btnText">
                      Read more
                    </button>
                  </div>
                  </div>

                </div>
                <div className="col-4 px-4 border-left text-center">
                  <div className="m-0">
                    <div className="text-center">
                      <p className="firstCardText text-center mr-2">Diagnosed By</p>
                    </div>
                    <div
                      className="text-white font-weight-bold text-center p-1 d-inline-block row"
                      style={{
                        borderRadius: "50%",
                        width: "140px",
                        height: "140px",
                        background: "#F0B556"
                      }}
                    >
                      <p className="vertText mt-3">LL</p>
                    </div>
                    <div className="text-center mt-3">
                      <p className="firstCardText text-center text-dark consultText mt-1 mb-0">
                        LongXi Lin
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="font-weight-bold text-center mt-0">
                        M.D Sunnybrook
                      </p>
                      <div className="btn btn-primary btn-sm mx-auto px-4">Contact</div>
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

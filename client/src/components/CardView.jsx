import React, { Component } from "react";
import fillerimg from "../assets/fillerimg.png";

class CardView extends Component {
  state = {};

  render() {
    return (
      <div className="row pr-5 pt-2">
        <div className="col-md-12">
          <div className="card mr-3 mt-3 pb-3 w-100">
            <div className="card-header cardTitle">Grapht #000123</div>
            <div className="row mt-4 ml-4 mb-0 pb-0">
              <div className="col-5 m-0 px-4">
                <img className="cardImg img-thumbnail" style={{width:"100%"}} src={fillerimg}></img>
              </div>
              <div className="col-7 text-left mt-4">
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
            <div className="row">
              <p className="col-12 text-center mx-auto fourthCardText">
                Where To Go From Here?
              </p>
            </div>
            <div className="row ml-5 mr-5 cardbox">
              <div className="row col">
                <div className="col-6 pt-3 text-center">
                  <button type="button" style={{background:"#fc8766"}} class="btn text-white btn-lg btnText">
                    Ask A Local Derm
                  </button>
                  <p className="smallButtonText pt-2 text-center">
                    3.99/Consult
                  </p>
                </div>
                <div className="col-6 mt-3 text-center">
                  <button type="button" class="btn btn-primary btn-lg btnText">
                    Upload to Maple
                  </button>
                  <p className="smallButtonText pt-2 text-center">
                    Transfer To Maple
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardView;

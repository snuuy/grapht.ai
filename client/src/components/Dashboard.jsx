import React, { Component } from "react";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import CardView from "./CardView";
import Upload from "./Upload";
import GraphtsGrid from "./GraphtsGrid";
class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: localStorage.getItem("userType"),
      isNextStep: false,
      isUploaded: false,
      loading: false,
      results: {}
    };
  }

  handleUpload(results) {
    this.setState({results:results,isUploaded:true})
  }

  render() {
    return (
      <div>
        <TopBar userType={this.state.userType} />
        <div className="row" style={{overflow:"scroll !important"}}>
          <div className="col-2 p-0" style={{ height: "calc(100vh - 83px)" }}>
            <NavBar userType={this.state.userType} />
          </div>
          <div className="col-10 bg-white" style={{overflow:"scroll !important"}}>
            {this.state.userType == "client" ?
            <div className="row">
              { !this.state.isNextStep ? 
              <>
              <div className="col-3 pt-4 pr-0 pl-4">
              <Upload toggleLoading={() => this.setState({loading:!this.state.loading})} handleUpload={(response) => this.handleUpload(response)}/>
              </div>
              <div className="col-9 px-4">
              { this.state.isUploaded ? 
              <CardView results={this.state.results} nextStep={() => this.setState({isNextStep:true})}/>
              : <>
              {
                this.state.loading ? <div className="m-4"><div className="loading"></div></div> : <></>
              }
              </> }
              </div>
              </>
              : 
                <>
                  TEST
                </> 
              }
            </div>
            : 
            <GraphtsGrid/> 
            }
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;

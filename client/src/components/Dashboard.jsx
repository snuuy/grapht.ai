import React, { Component } from "react";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import CardView from "./CardView";
import Upload from "./Upload";
import ConsultCard from "./ConsultCard";
import GraphtsGrid from "./GraphtsGrid";
class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: localStorage.getItem("userType"),
      isNextStep: false,
      isUploaded: false,
      loading: true,
      results: {}
    };
  }

  handleUpload(results) {
    this.setState({ results: results, isUploaded: true, isRequested: false });
  }

  componentDidMount() {
    var request = new XMLHttpRequest();
    request.open("GET", "/api/grapht/all");
    request.send();
    request.onreadystatechange = event => {
        if (event.target.readyState === 4 && event.target.status === 200 && event.target.responseText) {
          const response = JSON.parse(event.target.responseText);
          if (response.length == 0) {
            this.setState({loading:false,isUploaded:false})
          }
          else {
            this.setState({results:{grapht:response[0]}, isUploaded:true, loading:false, isNextStep: response[0].doctorDiagnosis, isRequested: response[0].doctorRequested})
          }
        }
        if (event.target.status === 400 || event.target.status === 500) {
          console.log("err")     
        }
    }
  }

  requestDerm() {
    var request = new XMLHttpRequest();
    request.open("POST", "/api/grapht/request-doctor");
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(
        { 
            graphtId: this.state.results.grapht.id,
        }
      )
    );
    request.onreadystatechange = event => {
        if (event.target.readyState === 4 && event.target.status === 200 && event.target.responseText) {
          const response = JSON.parse(event.target.responseText);
          this.setState({isRequested:true})
        }
        if (event.target.status === 400 || event.target.status === 500) {
          this.setState({isRequested:true})
          console.log("err")     
        }
    }
  }

  render() {
    return (
      <div>
        <TopBar userType={this.state.userType} />
        <div className="row" style={{ overflow: "scroll !important" }}>
          <div className="col-2 p-0" style={{ height: "calc(100vh - 83px)" }}>
            <NavBar userType={this.state.userType} />
          </div>

          <div className="col-10 bg-white">
            {this.state.userType == "client" ? (
              <div className="row">
                    <div className="col-3 pt-4 pr-0 pl-4">
                      <Upload
                        toggleLoading={() =>
                          this.setState({ loading: !this.state.loading, isUploaded: false })
                        }
                        handleUpload={response => this.handleUpload(response)}
                      />
                    </div>
                  {!this.state.isNextStep ? (
                    <>
                    <div className="col-9 px-4">
                      {this.state.isUploaded ? (
                        <CardView
                          isRequested={this.state.isRequested}
                          requestDerm={() => this.requestDerm()}
                          results={this.state.results}
                          nextStep={() => this.setState({ isNextStep: true })}
                        />
                      ) : (
                        <>
                          {this.state.loading ? (
                            <div className="m-4">
                              <div className="loading"></div>
                            </div>
                          ) : (
                            <></>
                          )}
                        </>
                      )}
                    </div>
                  </>
                ) : (
                  <ConsultCard results={this.state.results}></ConsultCard>
                )}
              </div>
            ) : (
              <GraphtsGrid />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;

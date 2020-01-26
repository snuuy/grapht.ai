import React from "react";
import icon_refresh from "../assets/icons/refresh.png";
import DiagnoseCard from "./DiagnoseCard";
export default class GraphtsGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      graphts: []
    };
    this.date = new Date();
  }

  componentDidMount() {
    this.loadGraphts();
  }

  loadGraphts() {
    this.setState({ loading: true });
    var request = new XMLHttpRequest();
    request.open("GET", "/api/grapht/all");
    request.send();
    request.onreadystatechange = event => {
      if (
        event.target.readyState === 4 &&
        event.target.status === 200 &&
        event.target.responseText
      ) {
        const response = JSON.parse(event.target.responseText);
        this.setState({ graphts: response.filter(g => g.doctorRequested && ! g.doctorDiagnosis), loading: false });
      }
      if (event.target.status === 400 || event.target.status === 500) {
        console.log("error");
      }
    };
  }

    goBack() {
        this.loadGraphts();
        this.setState({selectedGrapht:null})
    }

    render() {
        if (this.state.loading) {
            return (<div className="mx-auto p-5"><div className="loading"></div></div>)
        }
        else {
            if (this.state.selectedGrapht) {
                return (<DiagnoseCard goBack={() => this.goBack()} grapht={this.state.selectedGrapht}/>)
            }
            return (
                <>
                <div className="row text-right w-100">
                    <div className="col-12 px-4 pt-3 pb-0">
                    <div className="d-inline-block text-muted align-middle mr-3 mt-1">Last Updated: {this.date.toLocaleString()}</div>
                    <img onClick={() => this.loadGraphts()} className="align-middle float-right" style={{width:"40px", cursor:"pointer"}} src={icon_refresh}/>
                    </div>
                </div>
                <div className="row pr-5 pt-3 pl-4">
                        { this.state.graphts.length > 0 ?
                         this.state.graphts.map((grapht, i) => 
                            <div className="col-3 p-2" onClick={() => this.setState({selectedGrapht:grapht})}>
                                <img className="w-100 rounded-top box-shadow grid-img" style={{maxHeight:"300px"}} src={"data:"+grapht.type+";base64," + grapht.image} />
                                <div className="rounded-bottom bg-light text-dark font-weight-bold text-center p-3 border">
                                    Grapht {grapht.id.slice(16).toUpperCase()}
                                </div>
                            </div>
                        ) : <div className="px-4 text-muted">There are no graphts currently ready for diagnosis</div>}
                </div>
        </>
      );
    }
  }
}

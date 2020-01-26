import React, { Component } from "react";
import add_icon from "../assets/icons/add.png";
class Upload extends Component {
  handleImageChange(e) {
    this.props.toggleLoading();
    var request = new XMLHttpRequest();
    request.open("POST", "/api/grapht/upload");
    var formData = new FormData();
    formData.append("img", e.target.files[0]);
    request.send(formData);
    request.onreadystatechange = event => {
      if (
        event.target.readyState === 4 &&
        event.target.status === 200 &&
        event.target.responseText
      ) {
        const response = JSON.parse(event.target.responseText);
        this.props.handleUpload(response);
      }
      if (event.target.status === 400 || event.target.status === 500) {
        console.log("error");
      }
    };
  }

  render() {
    return (
      <div
        onClick={() => this.fileUpload.click()}
        className="rounded box-shadow p-4 text-center upload-btn py-5"
      >
        <img style={{ width: "50px" }} src={add_icon} />
        <div className="mt-3 font-weight-bold h5 text-white">Upload Grapht</div>
        <input
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          style={{ display: "none" }}
          onChange={e => this.handleImageChange(e)}
          ref={input => (this.fileUpload = input)}
        />
      </div>
    );
  }
}

export default Upload;

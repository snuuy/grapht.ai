import React, { Component } from "react";
import add_icon from "../assets/icons/add.png"
class Upload extends Component {

  handleImageChange(e) {
    console.log(e.target.files)
    var request = new XMLHttpRequest();
    request.open("POST", "/api/grapht/upload");
    var formData = new FormData();
    formData.append("img", e.target.files[0]);
    request.send(formData);
    request.onreadystatechange = event => {
        if (event.target.readyState === 4 && event.target.status === 200 && event.target.responseText) {
            const response = JSON.parse(event.target.responseText);
            console.log(response)
        }
        if (event.target.status === 400 || event.target.status === 500) {
            console.log("error")
        }
    }
  }

  render() {
    return (
      <div  onClick={() => this.fileUpload.click()} className="rounded box-shadow p-4 text-center upload-btn">
          <img src={add_icon}/>
          <div className="mt-3 font-weight-bold h5 text-white">Upload image</div>
          <input type="file" id="image"
            accept="image/png, image/jpeg" style={{display:"none"}} 
            onChange={(e) => this.handleImageChange(e)}
            ref={input => this.fileUpload = input}
            />
      </div>
    );
  }
}

export default Upload;

import React from 'react';
import landingImg from '../assets/loadingpage.png'
import logo from '../assets/logo_navy.png'
export default class LandingPage extends React.Component {
    constructor(props) {
        super(props)
    }

    setUserType(type) {
        localStorage.setItem("userType", type)
    }

    render() {
        return (
            <div className="row m-0 p-0 h-100 bg-white">
                <div className="col-6 landing-bg" style={{ backgroundImage: "url(" + landingImg + ")" }}>
                </div>
                <div className="col-6 bg-white my-auto">
                    <div className="w-50 mx-auto mb-5">
                        <img src={logo} className="w-100" />
                    </div>
                    <div className="d-none text-dark font-weight-bold h5 text-center mb-4">
                        I am a...
                    </div>
                    <div className="w-50 mx-auto">
                        <a href="/login">
                            <div onClick={() => this.setUserType("Client")} className="p-3 rounded font-weight-bold mb-3 bg-purple text-center landing-btn">
                                Client
                            </div>
                        </a>
                        <a href="/login">
                            <div onClick={() => this.setUserType("Doctor")} className="p-3 rounded font-weight-bold mb-3 bg-green text-center landing-btn">
                                Medical Professional
                            </div>
                        </a>
                        <a href="/login">
                            <div onClick={() => this.setUserType("Student")} className="p-3 rounded font-weight-bold bg-orange text-center landing-btn">
                                Student / Educator
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

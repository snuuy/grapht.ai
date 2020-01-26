import React from 'react';
import "../Login.css"
import logo from '../assets/logo_navy.png'
export default class LandingPage extends React.Component {
    constructor(props) {
        super(props)
    }

    redirect() {
        setTimeout(
            function () {
                this.props.history.push('/dashboard')
            }
                .bind(this),
            1000
        );
    }

    render() {
        return (
            <div className="row" style={{ height: "100vh" }}>
                <div className="col-12 my-auto">
                    <div className="container h-100">
                        <div className="row rounded box-shadow bg-white p-5 my-auto">
                            <div className="col-5 p-4 text-center my-auto py-5">
                                <img src={logo} className="w-75 my-auto" />
                            </div>
                            <div className="col-7 p-4 text-center p-5" style={{ borderLeft: "3px solid #394279" }}>
                                <div className="px-5 mx-4">
                                    <div className="color-purple h2 mb-5 font-weight-bold">Login</div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="E-mail address" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <button disabled type="submit" className="rounded btn btn-secondary col-6 float-left">Register</button>
                                        </div>
                                        <div className="col-6">
                                            <button type="submit" className="rounded btn btn-primary col-6 float-right" onClick={() => this.redirect()}>Login</button>
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

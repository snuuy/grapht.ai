import React from 'react';
export default class LandingPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="row m-0 p-0 h-100 py-0">
                <div className="col-6 bg-primary">

                </div>
                <div className="col-6 bg-white">
                    <div className="px-5">
                        <div className="p-3 rounded font-weight-bold mb-3 bg-purple text-center">
                            Client
                        </div>
                        <div className="p-3 rounded font-weight-bold mb-3 bg-green text-center">
                            Medical Professional
                        </div>
                        <div className="p-3 rounded font-weight-bold bg-orange text-center">
                            Student / Educator
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

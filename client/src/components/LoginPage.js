import React from 'react';
export default class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userType: this.props.match.params.userType
        }
    }

    render() {
        return (
            <div className="container">
                LOGIN PAGE for {this.state.userType}
            </div>
        );
    }
}

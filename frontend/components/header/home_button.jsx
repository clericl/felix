import React from 'react';
import { Redirect } from 'react-router-dom';

class HomeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fireRedirect: false,
        };
        this.setRedirect = this.setRedirect.bind(this);
    }

    setRedirect() {
        this.setState({
            fireRedirect: true,
        });
    }

    componentDidUpdate() {
        if (this.state.fireRedirect) {
            this.setState({
                fireRedirect: false,
            });
        }
    }

    render() {
        if (this.state.fireRedirect) {
            return (
                <Redirect to="/" />
            )
        } else {
            return (
                <button className="nav-button" onClick={this.setRedirect}>Home</button>
            )
        }
    }
} 

export default HomeButton;
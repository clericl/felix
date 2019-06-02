import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions';

class DemoLink extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.loginUser({
            email: "tonytiger@test.com",
            password: "frostedflakes",
        });
    }

    render() {
        return (
            <button className="demo-text" onClick={this.handleClick}>Demo User Login</button>
        )
    }
}

const mdp = dispatch => {
    return {
        loginUser: user => dispatch(loginUser(user)),
    }
}

export default connect(null, mdp)(DemoLink);
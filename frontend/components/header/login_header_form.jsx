import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { loginUser, clearErrors } from '../../actions/session_actions';

class LoginHeaderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            fireRedirect: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e, key) {
        this.setState({
            [key]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.loginUser(this.state).then(null, () => {
            if (this.props.location.pathname === "/") {
            this.setState({
                    email: "",
                    password: "",
                    fireRedirect: true,
                }
        );}
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
                <Redirect to="/login" />
            )
        } else {
            return (
                <form className="login-header-form">
                    <div className="login-header-input-box">
                        <label className="login-header-label">Email or Phone</label>
                        <input
                            type="text"
                            className="login-header-input"
                            onChange={e => this.handleChange(e, "email")}
                            value={this.state.email}
                        />
                    </div>
                    <div className="login-header-input-box">
                        <label className="login-header-label">Password</label>
                        <input
                            type="password"
                            className="login-header-input"
                            onChange={e => this.handleChange(e, "password")}
                            value={this.state.password}
                        />
                    </div>
                    <button
                        className="login-header-submit-button"
                        onClick={this.handleSubmit}
                    >Log In</button>
                </form>
            )
        }
    }
}

const msp = state => {
    return {
        sessionErrors: state.errors.sessions,
    };
};

const mdp = dispatch => {
    return {
        loginUser: user => dispatch(loginUser(user)),
        clearErrors: () => dispatch(clearErrors()),
    };
};

export default withRouter(connect(msp, mdp)(LoginHeaderForm));
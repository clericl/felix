import React from 'react'
import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions';
import SessionError from './session_error';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.errors = null;
    }

    handleChange(e, key) {
        this.setState({
            [key]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.loginUser(this.state);
    }

    // renderErrors() {
    //     this.errors = this.props.sessionErrors.map((error, index) => {
    //         return <SessionError type={error} key={index} />
    //     });
    // }

    // componentDidUpdate() {
    //     this.renderErrors();
    // }

    render() {
        const errors = this.props.sessionErrors.map((error, index) => {
            return <SessionError type={error} key={index} />
        });

        return (
            <div className="login-form">
                {errors}
                <form className="login-inputs" id="login-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        id="email"
                        className="login-input"
                        placeholder="Email or Phone Number"
                        onChange={e => this.handleChange(e, "email")}
                        value={this.state.email}
                    />
                    <input
                        type="password"
                        id="password"
                        className="login-input"
                        placeholder="Password"
                        onChange={e => this.handleChange(e, "password")}
                        value={this.state.password}
                    />
                    <button
                        className="login-submit-button"
                        form="login-form"
                        type="submit"
                    >Log In</button>
                </form>
            </div>
        )
    }
}

const msp = (state, ownProps) => {
    return {
        sessionErrors: state.errors.sessions,
    }
}

const mdp = dispatch => {
    return {
        loginUser: user => dispatch(loginUser(user)),
    };
};

export default connect(msp, mdp)(LoginForm);
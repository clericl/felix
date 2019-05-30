import React from 'react'
import { connect } from 'react-redux';
import { loginUser, clearErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { FaExclamationCircle } from 'react-icons/fa';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            emailError: false,
            emailBorder: this.props.sessionErrors.includes("email"),
            passwordError: false,
            passwordBorder: this.props.sessionErrors.includes("password"),
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleError = this.toggleError.bind(this);
    }

    toggleError(e, key) {
        if (this.props.sessionErrors.includes(key)) {
            this.setState({
                [`${key}Error`]: !this.state[`${key}Error`],
                [`${key}Border`]: !this.state[`${key}Border`],
            });
        }
    }

    handleChange(e, key) {
        this.setState({
            [key]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.clearErrors();
        this.props.loginUser(this.state);
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({
                emailBorder: this.props.sessionErrors.includes("email"),
                passwordBorder: this.props.sessionErrors.includes("password"),
            });
        }
    }

    render() {
        const errorBorder = "login-input error-border";
        const noBorder = "login-input";

        return (
            <div className="login-form">
                <form className="login-inputs" id="login-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        className={this.state.emailBorder ? errorBorder : noBorder}
                        placeholder="Email or Phone Number"
                        onChange={e => this.handleChange(e, "email")}
                        onFocus={e => this.toggleError(e, "email")}
                        onBlur={e => this.toggleError(e, "email")}
                        value={this.state.email}
                    />
                    <div className="email-error-bounds">
                        <FaExclamationCircle
                            className="error-icon"
                            id="email-icon"
                            style={this.state.emailBorder ? {} : { visibility: "hidden" }}
                        />
                        <div
                            className="red-error-box email-error"
                            id="email-error-box"
                            style={this.state.emailError ? {} : {visibility: "hidden"}}
                        >
                            <p>
                                The email or phone number you've entered doesn't match any account.&nbsp;
                                <Link to="/login" className="error-link">Sign up for an account.</Link>
                            </p>
                        </div>
                    </div>
                    <input
                        type="password"
                        className={this.state.passwordBorder ? errorBorder : noBorder}
                        placeholder="Password"
                        onChange={e => this.handleChange(e, "password")}
                        onFocus={e => this.toggleError(e, "password")}
                        onBlur={e => this.toggleError(e, "password")}
                        value={this.state.password}
                        />
                    <div className="password-error-bounds">
                        <FaExclamationCircle
                            className="error-icon"
                            id="password-icon"
                            style={this.state.passwordBorder ? {} : { visibility: "hidden" }}
                        />
                        <div
                            className="red-error-box password-error"
                            id="password-error-box"
                            style={this.state.passwordError ? {} : {visibility: "hidden"}}
                        >
                            <p>
                                The password you've entered is incorrect.&nbsp;
                                <Link to="/login" className="error-link">Forgot Password?</Link>
                            </p>
                        </div>
                    </div>
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
        clearErrors: () => dispatch(clearErrors()),
        loginUser: user => dispatch(loginUser(user)),
    };
};

export default connect(msp, mdp)(LoginForm);
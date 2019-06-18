import React from 'react'
import { connect } from 'react-redux';
import { loginUser, clearErrors } from '../../actions/session_actions';
import NewUserFormError from '../main/new_user_main/new_user_form_error';

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
        return (
            <div className="login-form">
                <form className="login-inputs" id="login-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        className={`login-input ${this.state.emailBorder ? "error-border" : ""}`}
                        placeholder="Email or Phone Number"
                        onChange={e => this.handleChange(e, "email")}
                        onFocus={e => this.toggleError(e, "email")}
                        onBlur={e => this.toggleError(e, "email")}
                        value={this.state.email}
                    />
                    <NewUserFormError
                        type="email"
                        text="The email or phone number you've entered doesn't match any account."
                        displayBorder={this.state.emailBorder}
                        displayError={this.state.emailError}
                    />
                    <input
                        type="password"
                        className={`login-input ${this.state.passwordBorder ? "error-border" : ""}`}
                        placeholder="Password"
                        onChange={e => this.handleChange(e, "password")}
                        onFocus={e => this.toggleError(e, "password")}
                        onBlur={e => this.toggleError(e, "password")}
                        value={this.state.password}
                        />
                    <NewUserFormError
                        type="password"
                        text="The password you've entered is incorrect."
                        displayBorder={this.state.passwordBorder}
                        displayError={this.state.passwordError}
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
        sessionErrors: state.errors.sessions
    }
}

const mdp = dispatch => {
    return {
        clearErrors: () => dispatch(clearErrors()),
        loginUser: user => dispatch(loginUser(user)),
    };
};

export default connect(msp, mdp)(LoginForm);
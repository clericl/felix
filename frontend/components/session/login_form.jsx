import React from 'react'
import { connect } from 'react-redux';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
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
        this.props.loginUser(this.state);
    }

    render() {
        return (
            <div className="login-form">
                <form className="login-inputs" id="login-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        className="login-input"
                        placeholder="Email or Phone Number"
                        onChange={e => this.handleChange(e, "email")}
                        value={this.state.email}
                    />
                    <input
                        type="password"
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

const mdp = dispatch => {
    return {
        loginUser: user => dispatch(loginUser(user)),
    };
};

export default connect(null, mdp)(LoginForm);
import React from 'react'
import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions';

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
        const errors = this.props.sessionErrors.map(error => {
            
        })

        return (
            <div className="login-form">
                <form className="login-inputs" id="login-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        className="login-input"
                        placeholder="Email or Phone Number"
                        onChange={e => this.handleChange(e, "email")}
                        value={this.state.email}
                    >
                        {/* <SessionError type="email" /> */}
                    </input>
                    <input
                        type="password"
                        className="login-input"
                        placeholder="Password"
                        onChange={e => this.handleChange(e, "password")}
                        value={this.state.password}
                    >
                        {/* <SessionError type="password" /> */}
                    </input>
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
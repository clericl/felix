import React from 'react';
import { loginUser, clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

class NewSessionHeaderForm extends React.Component {
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

    componentDidUpdate(prevProps) {
        if (this.state.fireRedirect !== false) {
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
                <div className="header-form">
                    <form className="header-inputs" id="header-form" onSubmit={this.handleSubmit}>
                        <div className="header-input-box">
                            <label className="header-label">Email or Phone</label>
                            <input
                                type="text"
                                className="header-input"
                                onChange={e => this.handleChange(e, "email")}
                                value={this.state.email}
                            />
                        </div>
                        <div className="header-input-box">
                            <label className="header-label">Password</label>
                            <input
                                type="password"
                                className="header-input"
                                onChange={e => this.handleChange(e, "password")}
                                value={this.state.password}
                            />
                        </div>
                    </form>
                    <button
                        className="header-submit-button"
                        form="header-form"
                        type="submit"
                    >Log In</button>
                </div>
            )
        }
    }
}

const msp = (state, ownProps) => {
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

export default withRouter(connect(msp, mdp)(NewSessionHeaderForm));
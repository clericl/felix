import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import LoginForm from './login_form';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session_actions';

class LoginMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="login-main-box">
                <div className="login-box">
                    <h3>Log Into Felix</h3>
                    <LoginForm />
                    <Link to="/" className="forgot-account-link">Forgot account?</Link>
                    <p>or</p>
                    <Link to="/"><button className="new-account-button">Create New Account</button></Link>
                </div>
            </div>
        )
    }
}

const mdp = dispatch => {
    return {
        clearErrors: () => dispatch(clearErrors),
    }
}

export default connect(null, mdp)(LoginMain);
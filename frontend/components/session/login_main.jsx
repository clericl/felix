import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './login_form';

const LoginMain = props => {
    return (
        <div className="login-main-box">
            <div className="login-box">
                <h3>Log Into Felix</h3>
                <LoginForm />
                <Link to="/" className="forgot-account-link">Forgot account?</Link>
                <p>or</p>
                <button className="new-account-button">Create New Account</button>
            </div>
        </div>
    )
}

export default LoginMain;
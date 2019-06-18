import React from 'react';
import { Link } from 'react-router-dom';
import LoginHeaderLogo from './login_header_logo';

const SignupHeader = props => {
    return (
        <header className="header login-header">
            <nav className="signup-nav">
                <LoginHeaderLogo />
                <Link to="/signup"><button className="new-account-button">Create New Account</button></Link>
            </nav>
        </header>
    )
};

export default SignupHeader;
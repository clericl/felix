import React from 'react';
import { Link } from 'react-router-dom';
import SplashHeaderLogo from './splash_header_logo';

const LoginHeader = props => {
    return (
        <header className="login-header">
            <nav className="login-nav">
                <SplashHeaderLogo />
                <Link to="/signup"><button className="new-account-button">Create New Account</button></Link>
            </nav>
        </header>
    )
};

export default LoginHeader;
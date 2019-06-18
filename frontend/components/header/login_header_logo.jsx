import React from 'react';
import { Link } from 'react-router-dom';

const LoginHeaderLogo = props => {
    return (
        <Link to="/" className="login-header-logo">
            <img src={window.logoUrl} className="login-header-logo" />
        </Link>
    )
}

export default LoginHeaderLogo;
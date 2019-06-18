import React from 'react';
import LoginHeaderForm from './login_header_form';
import LoginHeaderLogo from './login_header_logo';

const LoginHeader = props => {
    return (
        <header className="login-header">
            <nav className="new-user-nav">
                <LoginHeaderLogo />
                <LoginHeaderForm />
            </nav>
        </header>
    )
}

export default LoginHeader;
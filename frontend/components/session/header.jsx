import React from 'react';
import Logo from './logo';
import SessionForm from './session_form';

const Header = props => {
    return (
        <header className="session-header">
            <nav className="session-nav">
                <Logo />
                <SessionForm />
            </nav>
        </header>
    )
};

export default Header;
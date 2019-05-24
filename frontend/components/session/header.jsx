import React from 'react';
import SessionForm from './session_form';
import Logo from './logo';

const Header = props => {
    return (
        <header className="new-session-header">
            <Logo />
            <SessionForm />
        </header>
    )
};

export default Header;
import React from 'react';
import SessionForm from './session_form';

const Header = props => {
    return (
        <header className="new-session-header">
            {/* <Logo /> */}
            <SessionForm />
        </header>
    )
};

export default Header;
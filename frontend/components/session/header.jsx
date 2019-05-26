import React from 'react';
import NewSessionLogo from './logo';
import NewSessionForm from './session_form';

const NewSessionHeader = props => {
    return (
        <header className="session-header">
            <nav className="session-nav">
                <NewSessionLogo />
                <NewSessionForm />
            </nav>
        </header>
    )
};

export default NewSessionHeader;
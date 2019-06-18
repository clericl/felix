import React from 'react';
import SplashHeaderLogo from './splash_header_logo';
import SplashHeaderForm from './splash_header_form';

const SplashHeader = props => {
    return (
        <header className="session-header">
            <nav className="session-nav">
                <SplashHeaderLogo />
                <SplashHeaderForm />
            </nav>
        </header>
    )
};

export default SplashHeader;
import React from 'react';
import { connect } from 'react-redux';
import LoginHeader from './login_header';
import MainHeaderLogo from './main_header_logo';
import MainHeaderSearch from './main_header_search';
import HeaderNav from './header_nav';

const MainHeader = ({ currentUser }) => {
    if (currentUser) {
        return (
            <header className="header main-header">
                <nav className="main-header-nav">
                    <div className="main-header-logo-search">
                        <MainHeaderLogo />
                        <MainHeaderSearch />
                    </div>
                    <HeaderNav />
                </nav>
            </header>
        )
    } else {
        return (
            <LoginHeader />
        )
    }
}

const msp = state => {
    return {
        currentUser: state.session.currentUser,
    }
}

export default connect(msp, null)(MainHeader);
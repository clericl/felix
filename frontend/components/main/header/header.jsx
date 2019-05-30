import React from 'react';
import LogoSearch from './logo_search';
import HeaderNav from './header_nav';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="header-main">
                <div className="header-nav">
                    <LogoSearch />
                    <HeaderNav />
                </div>
            </nav>
        )
    }
}

export default Header;
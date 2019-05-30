import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { Link, Redirect } from 'react-router-dom';

class LogoSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="logo-search">
                <Link to="/" >
                    <FaFacebookSquare className="header-logo-icon" />
                </Link>
                <input type="text" className="header-search" />
            </div>
        )
    }
}

export default LogoSearch;
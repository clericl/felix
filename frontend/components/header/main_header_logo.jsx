import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from 'react-icons/fa';

const MainHeaderLogo = props => {
    return (
        <div className="logo-search">
            <Link to="/" className="header-logo-box" >
                <FaFacebookSquare className="header-logo-icon" />
            </Link>
        </div>
    )
}

export default MainHeaderLogo;
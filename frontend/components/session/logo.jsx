import React from 'react';
import { Link } from 'react-router-dom';

const Logo = props => {
    return (
        // <img src="#" alt="Go to felix home"/>
        <Link to="/" className="logo">felix</Link>
    )
};

export default Logo;
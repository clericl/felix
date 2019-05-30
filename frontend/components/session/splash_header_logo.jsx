import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session_actions';

const NewUserLogo = props => {
    return (
        <Link to="/" className="logo" >felix</Link>
    )
};

export default NewUserLogo;
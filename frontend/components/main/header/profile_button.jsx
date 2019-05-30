import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const ProfileButton = props => {
    return (
        <button className="nav-button">{props.currentUser.firstName}</button>
    )
}

const msp = state => {
    return {
        currentUser: state.session.currentUser,
    };
};

export default withRouter(connect(msp, null)(ProfileButton));
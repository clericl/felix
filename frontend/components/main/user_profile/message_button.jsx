import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FaFacebookMessenger } from 'react-icons/fa';

const MessageButton = props => {
    if (props.currentUser != props.match.params.userId) {
        return (
            <button className="profile-header-button profile-message-button">
                <FaFacebookMessenger /> <p>Message</p>
            </button>
        )
    } else {
        return null;
    }   
}

const msp = state => {
    return {
        currentUser: state.session.currentUser,
    }
}

export default withRouter(connect(msp,null)(MessageButton));
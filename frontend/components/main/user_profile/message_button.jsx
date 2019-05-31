import React from 'react';
import { FaFacebookMessenger } from 'react-icons/fa';

const MessageButton = props => {
    return (
        <button className="profile-header-button profile-message-button">
            <FaFacebookMessenger /> <p>Message</p>
        </button>
    )
}

export default MessageButton;
import React from 'react';

const ProfileHeaderDropdownItem = props => {
    return (
        <li className="profile-header-dropdown-item" onClick={props.action}>{props.text}</li>
    )
}

export default ProfileHeaderDropdownItem;
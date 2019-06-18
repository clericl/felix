import React from 'react';
import { withRouter } from 'react-router-dom';

const ProfilePhoto = props => {
    return (
        <img className="profile-photo" src={props.pageUser.defaultImgUrl} />
    )
};

export default withRouter(ProfilePhoto);
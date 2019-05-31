import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const ProfilePhoto = props => {
    const proPic = props.myUser ? props.myUser.defaultImgUrl : window.catvatarUrl
    return (
        <img className="profile-photo" src={proPic} />
    )
};

const msp = (state, ownProps) => {
    return {
        myUser: state.entities.users[ownProps.match.params.userId]
    }
}

export default withRouter(connect(msp, null)(ProfilePhoto));
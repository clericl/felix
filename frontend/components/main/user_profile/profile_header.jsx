import React from 'react';
import CoverPhoto from './cover_photo';
import ProfilePhoto from './profile_photo';
import ProfileHeaderNav from './profile_header_nav';
import ProfileHeaderUtils from './profile_header_utils';

class ProfileHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="profile-header">
                <CoverPhoto pageUser={this.props.pageUser} />
                <ProfilePhoto pageUser={this.props.pageUser} />
                <ProfileHeaderNav pageUser={this.props.pageUser} />
                <ProfileHeaderUtils pageUser={this.props.pageUser} />
            </header>
        )
    }
}

export default ProfileHeader;
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
                <CoverPhoto userId={this.props.userId} />
                <ProfilePhoto userId={this.props.userId} />
                <ProfileHeaderNav userId={this.props.userId} />
                <ProfileHeaderUtils userId={this.props.userId} />
            </header>
        )
    }
}

export default ProfileHeader;
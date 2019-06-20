import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import FriendsButton from './friends_button';
import MessageButton from './message_button';

class ProfileHeaderUtils extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const displayName = [
            this.props.pageUser.firstName,
            this.props.pageUser.lastName
        ].join(" ");

        return (
            <div className="position">
                <Link
                    to={`/users/${this.props.pageUser.id}`}
                    className="header-user-name"
                >
                {displayName}
                </Link>
                <div className="profile-header-nav-floating-buttons">
                    <FriendsButton pageUser={this.props.pageUser} buttonType="header" />
                    {/* <div>
                        <MessageButton />
                    </div> */}
                </div>
            </div>

        )

    }
}

export default withRouter(ProfileHeaderUtils);
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import FriendsButton from './friends_button';
import MessageButton from './message_button';

class ProfileHeaderUtils extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageUser: this.props.pageUser
        };
    }

    componentDidUpdate() {
        if (this.state.pageUser !== this.props.pageUser) {
            this.setState({
                pageUser: this.props.pageUser,
            });
        }
    }

    render() {
        const displayName = [
            this.state.pageUser.firstName,
            this.state.pageUser.lastName
        ].join(" ");

        return (
            <div className="position">
                <Link
                    to={`/users/${this.state.pageUser.id}`}
                    className="header-user-name"
                >
                {displayName}
                </Link>
                <div className="profile-header-nav-floating-buttons">
                    <FriendsButton pageUser={this.state.pageUser} />
                    <div>
                        <MessageButton />
                    </div>
                </div>
            </div>

        )

    }
}

export default withRouter(ProfileHeaderUtils);
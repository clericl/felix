import React from 'react';
import { sample } from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class FriendsBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageUser: this.props.pageUser,
        };
    }

    render() {
        const friendsBoxItems = this.props.usersSample.map(user => {
            return (
                <FriendsBoxItem user={user} />
            )
        });

        return (
            <div className="profile-friends-box">
                <div className="profile-friends-box-header">
                    <img className="profile-friends-icon" src="https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/U25C9NfW4hq.png" />
                    <Link
                        className="profile-friends-box-link"
                        to={`/users/${this.state.pageUser.id}`}
                    >Friends</Link>
                        &nbsp;·&nbsp;
                    <Link
                        className="profile-friends-box-count"
                        to={`/users/${this.state.pageUser.id}`}
                    >{this.state.pageUser.id.friends.length}</Link>
                </div>
                <ul className="friends-box-ul">
                    {friendsBoxItems}
                </ul>
            </div>
        )
    }
}

const msp = (state, ownProps) => {
    return {
        currentUserFriends: state.entities.users[state.session.currentUser].friends
    }
}

export default connect(msp, null)(FriendsBox);
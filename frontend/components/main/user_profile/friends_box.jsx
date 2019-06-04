import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchUser, fetchFriends } from '../../../actions/user_actions';
import FriendsBoxItem from './friends_box_item';

class FriendsBox extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId != this.props.pageUser.id) {
            this.props.fetchUser(this.props.pageUser.id);
        }
        if (this.props.friendsSample.some(user => typeof user === "undefined")) {
            this.props.fetchFriends(this.props.currentUser);
        }
    }

    render() {
        const nullUser = {
            id: "",
            firstName: "Veronica",
            lastName: "McPaddington",
            defaultImgUrl: window.catvatarUrl,
        };

        if (this.props.pageUser.friends) {
            return (
                <div className="profile-friends-box">
                    <div className="profile-friends-box-header">
                        <img className="profile-friends-icon" src="https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/U25C9NfW4hq.png" />
                        <Link
                            className="profile-friends-box-link"
                            to={`/users/${this.props.pageUser.id}`}
                        >Friends</Link>
                            ·
                        <Link
                            className="profile-friends-box-count"
                            to={`/users/${this.props.pageUser.id}`}
                        >{this.props.pageUser.friends.length}</Link>
                    </div>
                    <ul className="friends-box-ul">
                        <FriendsBoxItem user={this.props.friendsSample[0] || nullUser} />
                        <FriendsBoxItem user={this.props.friendsSample[1] || nullUser} />
                        <FriendsBoxItem user={this.props.friendsSample[2] || nullUser} />
                        <FriendsBoxItem user={this.props.friendsSample[3] || nullUser} />
                        <FriendsBoxItem user={this.props.friendsSample[4] || nullUser} />
                        <FriendsBoxItem user={this.props.friendsSample[5] || nullUser} />
                        <FriendsBoxItem user={this.props.friendsSample[6] || nullUser} />
                        <FriendsBoxItem user={this.props.friendsSample[7] || nullUser} />
                        <FriendsBoxItem user={this.props.friendsSample[8] || nullUser} />
                    </ul>
                </div>
            )
        } else {
            return null;
        }
    }
}

const msp = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        friendsSample: ownProps.friendsSample.map(userId => state.entities.users[userId]),
        pageUser: state.entities.users[ownProps.match.params.userId] || { id: null, friends: [] },
    }
}

const mdp = dispatch => {
    return {
        fetchFriends: userId => dispatch(fetchFriends(userId)),
        fetchUser: userId => dispatch(fetchUser(userId))
    }
}

export default withRouter(connect(msp, mdp)(FriendsBox));
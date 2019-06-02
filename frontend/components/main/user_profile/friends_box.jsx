import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import FriendsBoxItem from './friends_box_item';

class FriendsBox extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidUpdate() {
    //     if (this.props.friendsSample.some(user => typeof user === "undefined")) {
    //         this.fetch
    //     }
    // }

    render() {
        const nullUser = {
            id: "",
            firstName: "veronica",
            lastName: "mcpaddington",
            defaultImgUrl: window.catvatarUrl,
        };

        if (this.props.pageUser) {
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
                        <FriendsBoxItem user={nullUser} />
                        <FriendsBoxItem user={nullUser} />
                        <FriendsBoxItem user={nullUser} />
                        <FriendsBoxItem user={nullUser} />
                        <FriendsBoxItem user={nullUser} />
                        <FriendsBoxItem user={nullUser} />
                        <FriendsBoxItem user={nullUser} />
                        <FriendsBoxItem user={nullUser} />
                        <FriendsBoxItem user={nullUser} />
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
        // friendsSample: ownProps.friendsSample.map(userId => state.entities.users[userId])
        pageUser: state.entities.users[ownProps.match.params.userId] || { id: null, friends: [] },
    }
}

export default withRouter(connect(msp, null)(FriendsBox));
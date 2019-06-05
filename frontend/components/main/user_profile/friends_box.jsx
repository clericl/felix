import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchUser } from '../../../actions/user_actions';
import FriendsBoxItem from './friends_box_item';

class FriendsBox extends React.Component {
    constructor(props) {
        super(props);
        this.renderFriendsBoxItems = this.renderFriendsBoxItems.bind(this);
    }

    renderFriendsBoxItems() {
        if (this.props.friendsSample.length < 1) {
            return (
                <ul className="intro-box-ul">
                    <div className="profile-intro-box-add-bio" >
                        <img src="https://www.facebook.com/rsrc.php/v3/yg/r/vUnFbjB_5mv.png" />
                        <p>Add friends to start seeing their updates.</p>
                    </div>
                </ul>
            )
        } else {
            return (
                <ul className="friends-box-ul">
                    {this.props.friendsSample.map((friend, index) => {
                        return <FriendsBoxItem user={friend} key={index} />
                    })}
                </ul>
            )
        }
    }

    render() {
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
                        >{this.props.pageUser.friends ? this.props.pageUser.friends.length : 0}</Link>
                    </div>
                    {this.renderFriendsBoxItems()}
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
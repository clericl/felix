import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFriend } from '../../../actions/friend_actions';
import { FaCheck, FaUserClock, FaUserPlus, FaCaretDown, FaPen } from 'react-icons/fa';

class FriendsButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageUser: this.props.pageUser,
        };
        this.handleAdd = this.handleAdd.bind(this);
    }


    handleAdd(e) {
        this.props.addFriend(this.props.currentUser, this.state.pageUser.id);
    }

    render() {
        if (this.state.pageUser) {
            if (this.state.pageUser.id === this.props.currentUser) {
                return (
                    <button className="profile-header-button profile-friends-button">
                        <FaPen /> <p>Edit Profile</p>
                    </button>
                )
            } else if (this.props.currentPending.includes(this.state.pageUser.id)) {
                return (
                    <button className="profile-header-button profile-friends-button">
                        <FaUserClock /> <p>Friend Request Sent</p>
                    </button>
                )
            } else if (this.props.currentFriends.includes(this.state.pageUser.id)) {
                return (
                    <button className="profile-header-button profile-friends-button">
                        <FaCheck /> <p>Friends</p> <FaCaretDown />
                    </button>
                )
            } else {
                return (
                    <button className="profile-header-button profile-friends-button" onClick={this.handleAdd}>
                        <FaUserPlus /> <p>Add Friend</p>
                    </button>
                )
            }
        } else {
            return null;
        }
    }
}
    
const msp = state => {
    const currentUser = state.session.currentUser;
    return {
        currentUser: currentUser,
        currentPending: state.entities.users[currentUser].pending,
        currentFriends: state.entities.users[currentUser].friends,
    };
};

const mdp = dispatch => {
    return {
        addFriend: (userId, targetId) => dispatch(addFriend(userId, targetId)),
    };
};

export default withRouter(connect(msp, mdp)(FriendsButton));
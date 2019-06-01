import React from 'react';
import ProfileHeaderDropdownItem from './profile_header_dropdown_item';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFriend, deleteFriend, confirmFriend } from '../../../actions/friend_actions';
import { FaCheck, FaUserClock, FaUserPlus, FaCaretDown, FaPen } from 'react-icons/fa';

class FriendsButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
        this.toggleHidden = this.toggleHidden.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
        window.dropdownTimeout = null;
    }

    toggleHidden(e) {
        dropdownTimeout = setTimeout(
            () => {
                this.setState({
                    show: false,
                });
            },
        500);
    }

    toggleShow(e) {
        clearTimeout(dropdownTimeout);
        dropdownTimeout = setTimeout(
            () => {
                this.setState({
                    show: true,
                });
            },
        500);
    }

    componentDidUpdate() {
        // console.log(`pageUser pending ids: ${this.props.pageUser.pending}`);
    }

    render() {
        // console.log(this.props.pageUser.pending);
        // if (this.props.pageUser.pending.includes(this.props.currentUser)) {
        //     console.log("still pending");
        // }

        const display = "friends-dropdown-box " + (this.state.show ? "slow-show" : "hidden");
        if (this.props.pageUser) {
            if (this.props.pageUser.id === this.props.currentUser) {
                return (
                    <button
                        className="profile-header-button profile-friends-button"
                        // onClick={}
                    >
                        <FaPen /> <p>Edit Profile</p>
                    </button>
                )
            } else if (
                this.props.currentFriends.includes(this.props.pageUser.id) ||
                this.props.pageUser.friends.includes(this.props.currentUser)
                ) {
                return (
                    <>
                        <button
                            className="profile-header-button profile-friends-button"
                            onMouseEnter={this.toggleShow}
                            onMouseLeave={this.toggleHidden}
                        >
                            <FaCheck /> <p>Friends</p> <FaCaretDown />
                        </button>
                        <ul className={display}
                            id="friends-button-dropdown"
                            onMouseEnter={this.toggleShow}
                            onMouseLeave={this.toggleHidden}
                        >
                            <ProfileHeaderDropdownItem
                                text="Unfriend"
                                action={e =>
                                    this.props.deleteFriend(
                                        this.props.currentUser,
                                        this.props.pageUser.id
                                )}
                            />
                        </ul>
                    </>
                )
            } else if (this.props.currentPending.includes(this.props.pageUser.id)) {
                return (
                    <>
                        <button
                            className="profile-header-button profile-friends-button"
                            onMouseEnter={this.toggleShow}
                            onMouseLeave={this.toggleHidden}
                        >
                            <FaUserClock /> <p>Friend Request Sent</p>
                        </button>
                        <ul className={display}
                            id="friends-button-dropdown"
                            onMouseEnter={this.toggleShow}
                            onMouseLeave={this.toggleHidden}
                        >
                            <ProfileHeaderDropdownItem
                                text="Cancel"
                                action={e =>
                                    this.props.deleteFriend(
                                        this.props.currentUser,
                                        this.props.pageUser.id
                                    )}
                            />
                        </ul>
                    </>
                )
            } else if (this.props.pageUser.pending.includes(this.props.currentUser)) {
                return (
                    <>
                        <button
                            className="profile-header-button profile-friends-button"
                            onMouseEnter={this.toggleShow}
                            onMouseLeave={this.toggleHidden}
                        >
                            <FaUserPlus /> <p>Respond to Friend Request</p>
                        </button>
                        <ul className={display}
                            id="friends-button-dropdown"
                            onMouseEnter={this.toggleShow}
                            onMouseLeave={this.toggleHidden}
                        >
                            <ProfileHeaderDropdownItem
                                text="Confirm"
                                action={e =>
                                    this.props.confirmFriend(
                                        this.props.pageUser.id,
                                        this.props.currentUser
                                    )}
                            />
                            <ProfileHeaderDropdownItem
                                text="Delete Request"
                                action={e =>
                                    this.props.deleteFriend(
                                        this.props.pageUser.id,
                                        this.props.currentUser
                                    )}
                            />
                        </ul>
                    </>
                )
            } else {
                return (
                    <button
                        className="profile-header-button profile-friends-button"
                        onClick={e =>
                            this.props.addFriend(
                                this.props.currentUser,
                                this.props.pageUser.id
                            )}
                    >
                        <FaUserPlus /> <p>Add Friend</p>
                    </button>
                )
            }
        } else {
            return null;
        }
    }
}
    
const msp = (state, ownProps) => {
    const currentUser = state.session.currentUser;
    return {
        pageUser: state.entities.users[ownProps.match.params.userId],
        currentUser: currentUser,
        currentPending: state.entities.users[currentUser].pending,
        currentFriends: state.entities.users[currentUser].friends,
    };
};

const mdp = dispatch => {
    return {
        addFriend: (userId, targetId) => dispatch(addFriend(userId, targetId)),
        deleteFriend: (userId, targetId) => dispatch(deleteFriend(userId, targetId)),
        confirmFriend: (userId, targetId) => dispatch(confirmFriend(userId, targetId)),
    };
};

export default withRouter(connect(msp, mdp)(FriendsButton));
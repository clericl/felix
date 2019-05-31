import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFriend } from '../../../actions/friend_actions';
import { FaCheck, FaUserClock, FaUserPlus, FaCaretDown } from 'react-icons/fa';

class FriendsButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myUser: this.props.myUser,
        };
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e) {
        debugger
        this.props.addFriend(this.props.currentUser, this.state.myUser.id);
    }

    componentDidMount() {
        this.setState({
            myUser: this.props.myUser,
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.myUser.id !== this.state.myUser.id) {
            this.setState({
                myUser: this.props.myUser,
            });
        }
    }

    render() {
        return (null)
        // if (this.)
        //         return (
        //             <button className="profile-friends-button">
        //                 <FaCheck /> <p>Friends</p> <FaCaretDown />
        //             </button>
        //         );
        //     case "pending":
        //         return (
        //             <button className="profile-friends-button">
        //                 <FaUserClock /> <p>Friend Request Sent</p>
        //             </button>
        //         );
        //     default:
        //         return (
        //             <button className="profile-friends-button" onClick={this.handleClick}>
        //                 <FaUserPlus /> <p>Add Friend</p>
        //             </button>
        //         );
        }
    }
    
const msp = (state, ownProps) => {
    return {
        myUser: state.entities.users[ownProps.match.params.userId] || {
            firstName: "",
            lastName: "",
            id: ""
        },
        currentUser: state.session.currentUser,
    };
};

const mdp = dispatch => {
    return {
        addFriend: (userId, targetId) => dispatch(addFriend(userId, targetId)),
    };
};

export default withRouter(connect(msp, mdp)(FriendsButton));
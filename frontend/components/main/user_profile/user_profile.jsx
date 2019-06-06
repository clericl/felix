import React from 'react';
import ProfileHeader from './profile_header';
import FriendsBox from './friends_box';
import IntroBox from './intro_box';
import { ProfilePostModal } from '../posts/create_post_modal';
import ProfileTimeline from './profile_timeline';
import { withRouter, Redirect } from 'react-router-dom';
import { fetchUser, fetchFriends } from '../../../actions/user_actions';
import { connect } from 'react-redux';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
        this.props.fetchFriends(this.props.match.params.userId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId != this.props.pageUser.id) {
            this.props.fetchUser(this.props.match.params.userId);
            this.props.fetchFriends(this.props.match.params.userId);
        }
    }

    render() {
        if (this.props.pageUser.id) {
            const friendsSample = this.props.pageUser.friends ?
                this.props.pageUser.friends.slice(0, 9) : [];

            return (
                <div className="profile-body">
                    <ProfileHeader pageUser={this.props.pageUser} />
                    <div className="profile-content">
                        <aside className="profile-side">
                            <IntroBox />
                            <FriendsBox friendsSample={friendsSample}/>
                        </aside>
                        <main className="profile-main">
                            <ProfilePostModal />
                            <ProfileTimeline />
                        </main>
                    </div>
                </div>
            )
        } else if (this.props.errors) {
            return (
                <Redirect to="/" />
            )
        } else {
            return null;
        }
    }
}

const msp = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        pageUser: state.entities.users[ownProps.match.params.userId] || {id: null},
        errors: state.errors.users
    };
}

const mdp = dispatch => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId)),
        fetchFriends: userId => dispatch(fetchFriends(userId)),
    }
}

export default withRouter(connect(msp, mdp)(UserProfile));
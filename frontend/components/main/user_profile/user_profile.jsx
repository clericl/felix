import React from 'react';
import ProfileHeader from './profile_header';
import FriendsBox from './friends_box';
import { withRouter } from 'react-router-dom';
import { fetchUser, fetchUsers } from '../../../actions/user_actions';
import { connect } from 'react-redux';
import { sampleSize } from 'lodash';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friendsSample: sampleSize(this.props.pageUser.friends, 9)
        };
    }

    componentDidMount() {
        window.scroll(0, 195);
        this.props.fetchUser(this.props.match.params.userId);
    }

    componentDidUpdate() {
        if (this.props.pageUser.id != this.props.match.params.userId) {
            this.props.fetchUser(this.props.match.params.userId);
        }
        // this.props.fetchUsers(this.state.friendsSample);
    }

    render() {
        if (this.props.pageUser.id) {
            return (
                <div className="profile-body">
                    <ProfileHeader pageUser={this.props.pageUser} />
                    <aside className="profile-side">
                        <FriendsBox friendsSample={this.state.friendsSample}/>
                    </aside>
                    {/* 
                    <ProfileIntro />
                    <ProfilePhotos />
                    <ProfileFooter />
                <main>
                    <CreatePostBox />
                    <ProfileTimeline />
                </main> */}
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
        pageUser: state.entities.users[ownProps.match.params.userId] || {id: null},
    };
}

const mdp = dispatch => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId)),
        fetchUsers: userIds => dispatch(fetchUsers(userIds))
    }
}

export default withRouter(connect(msp, mdp)(UserProfile));
import React from 'react';
import ProfileHeader from './profile_header';
import FriendsBox from './friends_box';
import IntroBox from './intro_box';
import CreatePostModal from '../posts/create_post_modal';
import ProfileTimeline from './profile_timeline';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../../actions/user_actions';
import { connect } from 'react-redux';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scroll(0, 195);
        this.props.fetchUser(this.props.match.params.userId);
    }

    componentDidUpdate() {
        if (this.props.pageUser.id != this.props.match.params.userId) {
            this.props.fetchUser(this.props.match.params.userId);
        }
    }

    render() {
        if (this.props.pageUser.id) {
            const friendsSample = this.props.pageUser.friends ?
                this.props.pageUser.friends.slice(0, 8) : [];

            return (
                <div className="profile-body">
                    <ProfileHeader pageUser={this.props.pageUser} />
                    <div className="profile-content">
                        <aside className="profile-side">
                            <IntroBox />
                            <FriendsBox friendsSample={friendsSample}/>
                        </aside>
                        <main className="profile-main">
                            <CreatePostModal />
                            <ProfileTimeline />
                        </main>
                    </div>
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
    }
}

export default withRouter(connect(msp, mdp)(UserProfile));
import React from 'react';
import ProfileHeader from './profile_header';
import FriendsBox from './friends_box';
import IntroBox from './intro_box';
import CreatePostModal from './create_post_modal';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../../actions/user_actions';
import { connect } from 'react-redux';
import { takeRight } from 'lodash';

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
        const friendsSample = takeRight(this.props.pageUser.friends, 9);

        if (this.props.pageUser.id) {
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
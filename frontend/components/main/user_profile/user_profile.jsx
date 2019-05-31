import React from 'react';
import ProfileHeader from './profile_header';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../../actions/user_actions';
import { connect } from 'react-redux';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
    }

    componentDidUpdate(prevProps) {
        this.props.fetchUser(this.props.match.params.userId);
    }

    render() {
        return (
            <div className="profile-body">
                <ProfileHeader userId={this.props.match.params.userId} />
                {/* <aside>
                    <ProfileIntro />
                    <ProfilePhotos />
                    <ProfileFriends />
                    <ProfileFooter />
                </aside>
                <main>
                    <CreatePostBox />
                    <ProfileTimeline />
                </main> */}
            </div>
        )
    }
}

const mdp = dispatch => {
    return {
        fetchUser: id => dispatch(fetchUser(id)),
    }
}

export default withRouter(connect(null, mdp)(UserProfile));
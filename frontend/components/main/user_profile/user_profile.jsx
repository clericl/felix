import React from 'react';
import ProfileHeader from './profile_header';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../../actions/user_actions';
import { connect } from 'react-redux';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageUser: this.props.pageUser,
        };
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
    }

    componentDidUpdate() {
        if (this.state.pageUser.id != this.props.match.params.userId) {
            if (this.props.pageUser === this.state.pageUser) {
                this.props.fetchUser(this.props.match.params.userId);
            } else {
                this.setState({
                    pageUser: this.props.pageUser,
                });
            }
        }
    }

    render() {
        if (this.state.pageUser.id) {
            return (
                <div className="profile-body">
                    <ProfileHeader pageUser={this.state.pageUser} />
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
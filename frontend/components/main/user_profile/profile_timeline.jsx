import React from 'react';
import PostItem from '../posts/post_item';
import { connect } from 'react-redux';
import { Waypoint } from 'react-waypoint';
import { withRouter } from 'react-router-dom';
import { refetchPosts } from '../../../actions/post_actions';

class ProfileTimeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postOffset: 0,
        };
        this.reload = this.reload.bind(this);
    }

    reload() {
        this.props.refetchPosts(this.props.pageUser.id, this.state.postOffset).then(
            res => this.setState({
                postOffset: (this.state.postOffset + 1),
            })
        );
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.setState({
                postOffset: 0,
            });
            this.reload();
        }
    }

    render() {
        if (this.props.pageUser) {
            const receivedPosts = this.props.receivedPosts.map(
                post => <PostItem post={post} key={post.id} />
            );
    
            return (
                <ul className="profile-timeline">
                    {receivedPosts}
                    <Waypoint onEnter={this.reload} />
                </ul>
            )
        } else {
            return null;
        }
    }
}

const msp = (state, ownProps) => {
    const receivedPosts = Object.values(state.entities.posts)
        .filter(post => (post.postableId == ownProps.match.params.userId))
        .reverse();

    return {
        receivedPosts,
        pageUser: state.entities.users[ownProps.match.params.userId],
    }
}

const mdp = dispatch => {
    return {
        refetchPosts: (userId, offset) => dispatch(refetchPosts(userId, offset)),
    }
}

export default withRouter(connect(msp, mdp)(ProfileTimeline));
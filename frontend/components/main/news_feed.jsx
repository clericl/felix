import React from 'react';
import { connect } from 'react-redux';
import PostItem from './posts/post_item';
import { Waypoint } from 'react-waypoint';
import { withRouter } from 'react-router-dom';
import { refetchFeed } from '../../actions/post_actions';
import { fetchFriends } from '../../actions/user_actions';

class NewsFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            receivedPosts: [],
        };
        this.reload = this.reload.bind(this);
    }

    reload() {
        this.props.refetchFeed(this.props.currentUser, this.state.receivedPosts).then(
            res => this.setState({
                receivedPosts: this.state.receivedPosts.concat(this.props.receivedPosts.map(post => post.id)),
            })
        );
    }

    render() {
        const displayPosts = this.props.receivedPosts.map(
            post => <PostItem post={post} key={post.id} />
        );
                
        return (
            <ul className="news-feed">
                {displayPosts}
                <Waypoint onEnter={this.reload} />
            </ul>
        )
    }
}

const msp = (state, ownProps) => {
    const currentUser = state.session.currentUser;
    let currentFriends = [];

    if (state.entities.users[currentUser]) {
        currentFriends = state.entities.users[currentUser].friends;
    };

    const receivedPosts = Object.values(state.entities.posts)
        .filter(post => (
            currentFriends.includes(post.authorId) ||
            currentFriends.includes(post.postableId) ||
            post.postableId == currentUser))
        .reverse();

    return {
        currentUser,
        currentFriends,
        receivedPosts,
        pageUser: state.entities.users[ownProps.match.params.userId],
    }
}

const mdp = dispatch => {
    return {
        fetchFriends: userId => dispatch(fetchFriends(userId)),
        refetchFeed: (userId, receivedPosts) => dispatch(refetchFeed(userId, receivedPosts)),
    }
}

export default withRouter(connect(msp, mdp)(NewsFeed));
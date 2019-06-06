import React from 'react'
import { fetchUser } from '../../../actions/user_actions';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaThumbsUp, FaCaretRight } from 'react-icons/fa';

class PostResultItem extends React.Component {
    constructor(props) {
        super(props);
        this.renderPostName = this.renderPostName.bind(this);
        this.renderLikeCountText = this.renderLikeCountText.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.post.authorId);
        this.props.fetchUser(this.props.post.postableId);
    }

    renderLikeCountText(post) {
        const count = post.likes.length;
        if (post.likes.includes(this.props.currentUser)) {
            if (count === 1) {
                return this.props.currentUserName;
            } else if (count === 2) {
                return "You and 1 other";
            } else {
                return `You and ${(count - 1)} others`;
            }
        } else {
            return count;
        }
    }

    renderPostName() {
        if (this.props.postAuthor && this.props.postReceiver) {
            const authorName = [
                this.props.postAuthor.firstName,
                this.props.postAuthor.lastName
            ].join(" ");

            const receiverName = [
                this.props.postReceiver.firstName,
                this.props.postReceiver.lastName,
            ].join(" ");

            if (this.props.post.authorId === this.props.post.postableId) {
                return (
                    <div className="flex-container">
                        <Link
                            className="post-item-header-name"
                            to={`/users/${this.props.postAuthor.id}`}
                        >{authorName}</Link>
                    </div>
                )
            } else {
                return (
                    <div className="post-item-header-name-container">
                        <Link
                            className="post-item-header-name"
                            to={`/users/${this.props.postAuthor.id}`}
                        >{authorName}</Link>
                        <FaCaretRight className="post-item-header-name-icon" />
                        <Link
                            className="post-item-header-name"
                            to={`/users/${this.props.postReceiver.id}`}
                        >{receiverName}</Link>
                    </div>
                )
            }
        } else {
            return null;
        }
    }

    render() {
        if (this.props.postAuthor) {
            return (
                <div className="post-result-item">
                    <div className="post-item-header">
                        <img
                            src={this.props.postAuthor.defaultImgUrl}
                            className="create-post-avatar-icon"
                        />
                        <div className="post-item-header-details">
                            <div className="post-item-header-details">
                                {this.renderPostName()}
                                <p className="post-item-header-date">{this.props.post.displayDate}</p>
                            </div>
                        </div>
                    </div>
                    <div className={this.props.post.body.length > 85 ? "post-item-body-small" : "post-item-body"}>
                        <p>{this.props.post.body}</p>
                    </div>
                    <div className="post-item-actions">
                        <div className="post-item-actions-counts">
                            <div className={this.props.post.likes.length ? "post-item-likes-count" : "none"}>
                                <FaThumbsUp className="post-item-likes-count-icon" />
                                <p className="post-item-count-text">{this.renderLikeCountText(this.props.post)}</p>
                            </div>
                        </div>
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
        postAuthor: state.entities.users[ownProps.post.authorId],
        postReceiver: state.entities.users[ownProps.post.postableId],
    }
}

const mdp = dispatch => {
    return {
        fetchUser: id => dispatch(fetchUser(id)),
    }
}

export default connect(msp, mdp)(PostResultItem);
import React from 'react';
import { connect } from 'react-redux';
import CommentsIndex from './comments_index';
import { withRouter, Link } from 'react-router-dom';
import { toggleLikePost } from '../../../actions/like_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { FaEllipsisH, FaRegCommentAlt, FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
import ProfileHeaderDropdownItem from '../user_profile/profile_header_dropdown_item';

class PostItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false,
        };
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
        this.toggleLike = this.toggleLike.bind(this);
        this.addFocus = this.addFocus.bind(this);
        this.renderLikeButton = this.renderLikeButton.bind(this);
        this.renderLikeCountText = this.renderLikeCountText.bind(this);
    }

    toggleDropdown(e) {
        this.setState({
            showDropdown: true,
        });
        document.body.addEventListener("click", this.hideDropdown);
    }

    hideDropdown(e) {
        document.body.removeEventListener("click", this.hideDropdown);
        this.setState({
            showDropdown: false,
        });
    }

    toggleLike() {
        this.props.toggleLikePost(this.props.currentUser, this.props.post.id);
    }

    addFocus() {
        const input = document.getElementById(`${this.props.post.id}-comment`);
        if (input) input.focus();
    }

    renderLikeButton() {
        if (this.props.post.likes.includes(this.props.currentUser)) {
            return (
                <div
                    className="post-item-action liked"
                    onClick={this.toggleLike}
                ><FaThumbsUp className="post-item-action-icon" /> Like</div>
            )
        } else {
            return (
                <div
                    className="post-item-action"
                    onClick={this.toggleLike}
                ><FaRegThumbsUp className="post-item-action-icon" /> Like</div>
            )
        }
    }

    renderLikeCountText() {
        const count = this.props.post.likes.length;
        if (this.props.post.likes.includes(this.props.currentUser)) {
            if (count === 1) {
                return this.props.currentUserName
            } else if (count === 2) {
                return "You and 1 other"
            } else {
                return `You and ${(count - 1)} others`
            }
        } else {
            return count;
        }
    }

    render() {
        if (this.props.postAuthor) {
            const displayName = [
                this.props.postAuthor.firstName,
                this.props.postAuthor.lastName
            ].join(" ");

            const display = `post-item-settings ${this.state.showDropdown ? "" : "hidden"}`;
            const settingsIcon = (this.props.currentUser == this.props.match.params.userId) ?
                "post-item-settings-icon" : "none";
            
            return (
                <div className="post-item">
                    <div className="post-item-header">
                        <img
                            src={this.props.postAuthor.defaultImgUrl}
                            className="create-post-avatar-icon"
                        />
                        <div className="post-item-header-details">
                            <Link
                                className="post-item-header-name"
                                to={`/users/${this.props.postAuthor.id}`}
                            >{displayName}</Link>
                            <p className="post-item-header-date">{this.props.post.displayDate}</p>
                        </div>
                        <FaEllipsisH
                            className={settingsIcon}
                            onClick={this.toggleDropdown}
                        />
                        <ul className={display}>
                            <ProfileHeaderDropdownItem
                                text="Edit Post"
                                action={e => this.props.openModal(["editPost", this.props.post.id])}
                            />
                            <ProfileHeaderDropdownItem
                                text="Delete"
                                action={e => this.props.openModal(["deletePost", this.props.post.id])}
                            />
                        </ul>
                    </div>
                    <div className={this.props.post.body.length > 85 ? "post-item-body-small" : "post-item-body"}>
                        <p>{this.props.post.body}</p>
                    </div>
                    <div className="post-item-actions">
                        <div className="post-item-actions-counts">
                            <div className={this.props.post.likes.length ? "post-item-likes-count" : "none"}>
                                <FaThumbsUp className="post-item-likes-count-icon" />
                                <p className="post-item-count-text">{this.renderLikeCountText()}</p>
                            </div>
                        </div>
                        <div className="post-item-actions-nav">
                            {this.renderLikeButton()}
                            <div
                                className="post-item-action"
                                onClick={this.addFocus}
                            ><FaRegCommentAlt className="post-item-action-icon" /> Comment</div>
                        </div>
                    </div>
                    <CommentsIndex
                        indexType="comment"
                        parentId={null}
                        postId={this.props.post.id}
                        // childComments={this.props.post.comments}
                    />
                </div>
            )
        } else {
            return null;
        }
    }
}

const msp = (state, ownProps) => {
    const currentUser = state.session.currentUser;
    const likeCount = ownProps.post.likes
    return {
        currentUser,
        currentUserName: [
            state.entities.users[state.session.currentUser].firstName,
            state.entities.users[state.session.currentUser].lastName,
        ].join(" "),
        postAuthor: state.entities.users[ownProps.post.authorId],
        likeCount,
    }
}

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        openModal: ([modal, id]) => dispatch(openModal([modal, id])),
        toggleLikePost: (userId, likeableId) => dispatch(toggleLikePost(userId, likeableId)),
    }
}

export default withRouter(connect(msp, mdp)(PostItem));
import React from 'react';
import { connect } from 'react-redux';
import CommentsIndex from './comments_index';
import { withRouter, Link } from 'react-router-dom';
import TextareaAutosize from 'react-autosize-textarea';
import { FaEllipsisH, FaThumbsUp } from 'react-icons/fa';
import { fetchUser } from '../../../actions/user_actions';
import { editComment } from '../../../actions/comment_actions';
import { toggleLikeComment } from '../../../actions/like_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import ProfileHeaderDropdownItem from '../user_profile/profile_header_dropdown_item';

class CommentItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showIcon: false,
            showDropdown: false,
            edit: false,
            body: this.props.comment.body,
            editFocus: false,
        };
        this.showIcon = this.showIcon.bind(this);
        this.hideIcon = this.hideIcon.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.renderCommentBody = this.renderCommentBody.bind(this);
        this.handleChange = this.handleChange.bind(this);   
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.toggleEditFocus = this.toggleEditFocus.bind(this);
        this.toggleLike = this.toggleLike.bind(this);
        this.addFocus = this.addFocus.bind(this);
    }

    showIcon(e) {
        this.setState({
            showIcon: true,
        });
    }

    hideIcon(e) {
        if (!this.state.showDropdown) {
            this.setState({
                showIcon: false,
            });
        }
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

    handleChange(e) {
        this.setState({
            body: e.target.value,
        });
    }

    handleKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            const newComment = this.props.comment;
            newComment.body = this.state.body;
            this.props.editComment(newComment).then(
                res => this.setState({
                    edit: false,
                })
            );
        } else if (e.key === "Escape") {
            this.setState({
                edit: false,
            });
        }
    }

    toggleEdit(e) {
        this.setState({
            edit: !this.state.edit,
        });
    }

    toggleEditFocus(e, bool) {
        this.setState({
            editFocus: bool,
        });
    }

    toggleLike() {
        this.props.toggleLikeComment(this.props.currentUser, this.props.comment.id);
    }

    addFocus() {
        const input = document.getElementById(`${this.props.comment.parentId || this.props.comment.id}-reply`);
        if (input) input.focus();
    }

    renderCommentBody() {
        let cancel;
        if (this.state.editFocus) {
            cancel = (
                <div className="edit-comment-cancel-text">
                    Press Esc to&nbsp;
                    <p
                        className="edit-comment-cancel-link"
                        onClick={e => this.setState({ edit: false })}
                    >
                        cancel
                    </p>.
                </div>
            )
        } else {
            cancel = (
                <div className="edit-comment-cancel-text">
                    <p
                        className="edit-comment-cancel-link"
                        onClick={e => this.setState({ edit: false })}
                    >
                        Cancel
                    </p>
                </div>
            )
        };

        if (this.state.edit) {
            return (
                <div className="flex-column">
                    <TextareaAutosize
                        value={this.state.body}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyDown}
                        className={`edit-${this.props.indexType}-input`}
                        placeholder="Write a comment..."
                        onFocus={e => this.toggleEditFocus(e, true)}
                        onBlur={e => this.toggleEditFocus(e, false)}
                    />
                    {cancel}
                </div>
            )
        } else {
            const displayName = [
                this.props.commentAuthor.firstName,
                this.props.commentAuthor.lastName
            ].join(" ");

            const dropdownDisplay = this.state.showDropdown ? "comment-item-settings" : "none";
            const settingsIcon = (this.props.currentUser == this.props.comment.authorId) ?
                (this.state.showIcon ? "comment-settings-icon" : "none") : "none";

            return (
                <div className={`${this.props.indexType}-item-text`}>
                    <Link
                        to={`/users/${this.props.commentAuthor.id}`}
                        className="comment-item-name"
                    >{displayName}</Link>&nbsp;
                            {this.props.comment.body}
                    <FaEllipsisH
                        className={settingsIcon}
                        onClick={this.toggleDropdown}
                    />
                    <ul className={dropdownDisplay}>
                        <ProfileHeaderDropdownItem
                            text="✎ Edit..."
                            action={this.toggleEdit}
                        />
                        <ProfileHeaderDropdownItem
                            text="🗑️ Delete..."
                            action={e => this.props.openModal(["deleteComment", this.props.comment.id])}
                        />
                    </ul>
                    <div className={this.props.comment.likes.length ? "comment-likes-count" : "none"}>
                        <FaThumbsUp className="comment-likes-count-icon" />
                        <p className="post-item-count-text">{this.props.comment.likes.length}</p>
                    </div>
                </div>
            )
        }
    }

    componentDidMount() {
        this.props.fetchUser(this.props.comment.authorId);
    }

    render() {
        if (this.props.comment && this.props.commentAuthor) {
            const nextIndex = this.props.comment.parentId ?
                null :
                <CommentsIndex
                    indexType="reply"
                    postId={this.props.comment.postId}
                    parentId={this.props.comment.id}
                    // childComments={this.props.comment.comments}
                />;

            return (
                <li className="flex-column">
                    <div
                        className={`${this.props.indexType}-item-box`}
                        onMouseEnter={this.showIcon}
                        onMouseLeave={this.hideIcon}
                    >
                        <img
                            src={this.props.commentAuthor.defaultImgUrl || ""}
                            className={`${this.props.indexType}-avatar-icon`}
                        />
                        {this.renderCommentBody()}
                    </div>
                    <div className={`${this.props.indexType}-actions`}>
                        <p
                            className={`comment-action-link ${this.props.comment.likes.includes(this.props.currentUser) ? "liked" : ""}`}
                            onClick={this.toggleLike}
                        >Like</p>
                        &nbsp;·&nbsp;
                        <p
                            className="comment-action-link"
                            onClick={this.addFocus}
                        >Reply</p>
                        &nbsp;·&nbsp;
                        <p>{this.props.comment.displayDate}</p>
                    </div>
                    <div className="reply-index">
                        {nextIndex}
                    </div>
                </li>
            )
        } else {
            return null;
        }
    }
}

const msp = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        commentAuthor: state.entities.users[ownProps.comment.authorId],
    };
};

const mdp = dispatch => {
    return {
        fetchUser: user => dispatch(fetchUser(user)),
        closeModal: () => dispatch(closeModal()),
        openModal: ([modal, id]) => dispatch(openModal([modal, id])),
        editComment: comment => dispatch(editComment(comment)),
        toggleLikeComment: (userId, likeableId) => dispatch(toggleLikeComment(userId, likeableId)),
    }
}

export default connect(msp, mdp)(CommentItem);
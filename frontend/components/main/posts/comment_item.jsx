import React from 'react';
import { connect } from 'react-redux';
import { FaEllipsisH } from 'react-icons/fa';
import CommentsIndex from './comments_index';
import { withRouter, Link } from 'react-router-dom';
import TextareaAutosize from 'react-autosize-textarea';
import { editComment } from '../../../actions/comment_actions';
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
                        className="edit-comment-input"
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
                </div>
            )
        }
    }

    render() {
        if (this.props.comment) {
            const nextIndex = this.props.comment.parentId ?
                null :
                <CommentsIndex
                    indexType="reply"
                    postId={this.props.comment.postId}
                    parentId={this.props.comment.id}
                />;

            return (
                <li className="flex-column">
                    <div
                        className={`${this.props.indexType}-item-box`}
                        onMouseEnter={this.showIcon}
                        onMouseLeave={this.hideIcon}
                    >
                        <img
                            src={this.props.commentAuthor.defaultImgUrl}
                            className={`${this.props.indexType}-avatar-icon`}
                        />
                        {this.renderCommentBody()}
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
        closeModal: () => dispatch(closeModal()),
        openModal: ([modal, id]) => dispatch(openModal([modal, id])),
        editComment: comment => dispatch(editComment(comment)),
    }
}

export default connect(msp, mdp)(CommentItem);
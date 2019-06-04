import React from 'react';
import { connect } from 'react-redux';
import CommentsIndex from './comments_index';
import { FaEllipsisH } from 'react-icons/fa';
import { withRouter, Link } from 'react-router-dom';
import { openModal, closeModal } from '../../../actions/modal_actions';
import ProfileHeaderDropdownItem from '../user_profile/profile_header_dropdown_item';

class PostItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false,
        };
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
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
                        </div>
                        <div className="post-item-actions-nav">
                        </div>
                    </div>
                    <CommentsIndex postId={this.props.post.id} parentId={null} indexType="comment" />
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
    }
}

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        openModal: ([modal, id]) => dispatch(openModal([modal, id])),
    }
}

export default withRouter(connect(msp, mdp)(PostItem));
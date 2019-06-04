import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { editPost } from '../../../actions/post_actions';
import { closeModal } from '../../../actions/modal_actions';

class EditPostModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: this.props.post.body,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            body: e.target.value,
        });
    }

    handleSubmit(e) {
        const newPost = this.props.post;
        newPost.body = this.state.body;
        this.props.editPost(newPost).then(
            this.props.closeModal()
        );
    }

    render() {
        const textareaFontSize = this.state.body.length > 85 ? "-small" : "";
        const textarea = `create-post-textarea-modal${textareaFontSize}`

        return (
            <div className="edit-post-modal" onClick={e => e.stopPropagation()}>
                <div className="delete-post-header">
                    <p>Edit Post</p>
                    <p
                        className="delete-post-header-close"
                        onClick={e => {
                            e.stopPropagation();
                            this.props.closeModal();
                        }}
                    >&times;</p>
                </div>
                <div className="create-post-body">
                    <img src={this.props.currentUserIcon} className="create-post-avatar-icon" />
                    <textarea
                        className={textarea}
                        placeholder="What's on your mind?"
                        value={this.state.body}
                        onChange={this.handleChange}
                    ></textarea>
                </div>
                <div className="create-post-footer">
                    <button
                        className="create-post-footer-post"
                        disabled={this.state.body.length === 0}
                        onClick={this.handleSubmit}
                    >Save</button>
                </div>
            </div>
        )
    }
}

const msp = (state, ownProps) => {
    return {
        post: state.entities.posts[state.ui.modal[1]],
        modal: state.ui.modal[0],
        currentUser: state.session.currentUser,
        currentUserIcon: state.entities.users[state.session.currentUser].defaultImgUrl
    };
};

const mdp = dispatch => {
    return {
        editPost: post => dispatch(editPost(post)),
        closeModal: () => dispatch(closeModal()),
    };
};

export default withRouter(connect(msp, mdp)(EditPostModal));
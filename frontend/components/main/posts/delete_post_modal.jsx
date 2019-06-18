import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../../../actions/post_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';

class DeletePostModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="delete-post-modal" onClick={e => e.stopPropagation()}>
                <div className="delete-post-header">
                    <p>Delete Post?</p>
                    <p
                        className="delete-post-header-close"
                        onClick={e => {
                            e.stopPropagation();
                            this.props.closeModal();
                        }}
                    >&times;</p>
                </div>
                <div className="delete-post-body">
                    <p>You can edit it if you just need to change something.</p>
                </div>
                <div className="delete-post-footer">
                    <button
                        className="delete-post-footer-edit"
                        onClick={e => this.props.openModal(["editPost", this.props.post.id])}
                    >Edit</button>
                    <button
                        className="delete-post-footer-delete"
                        onClick={e => this.props.deletePost(this.props.post.id)}
                    >Delete</button>
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
    }
}

const mdp = dispatch => {
    return {
        deletePost: postId => dispatch(deletePost(postId)),
        openModal: ([modal, id]) => dispatch(openModal([modal, id])),
        closeModal: () => dispatch(closeModal()),
    };
}

export default connect(msp, mdp)(DeletePostModal);
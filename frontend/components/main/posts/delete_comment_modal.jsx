import React from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../../../actions/comment_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';

class DeleteCommentModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="delete-post-modal" onClick={e => e.stopPropagation()}>
                <div className="delete-post-header">
                    <p>Delete</p>
                    <p
                        className="delete-post-header-close"
                        onClick={e => {
                            e.stopPropagation();
                            this.props.closeModal();
                        }}
                    >&times;</p>
                </div>
                <div className="delete-post-body">
                    <p>Are you sure you want to delete this comment?</p>
                </div>
                <div className="delete-post-footer">
                    <button
                        className="delete-post-footer-edit"
                        onClick={this.props.closeModal}
                    >Cancel</button>
                    <button
                        className="delete-post-footer-delete"
                        onClick={e => this.props.deleteComment(this.props.comment.id)}
                    >Delete</button>
                </div>
            </div>
        )
    }
}

const msp = (state, ownProps) => {
    return {
        comment: state.entities.comments[state.ui.modal[1]],
        modal: state.ui.modal[0],
        currentUser: state.session.currentUser,
    }
}

const mdp = dispatch => {
    return {
        deleteComment: commentId => dispatch(deleteComment(commentId)),
        openModal: ([modal, id]) => dispatch(openModal([modal, id])),
        closeModal: () => dispatch(closeModal()),
    };
}

export default connect(msp, mdp)(DeleteCommentModal);
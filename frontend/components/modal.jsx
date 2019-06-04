import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modal_actions';
import EditPostModal from './main/posts/edit_post_modal';
import DeletePostModal from './main/posts/delete_post_modal';

const Modal = props => {
    if (!props.modal) {
        return null;
    } else {
        switch (props.modal[0]) {
          case "createPost":
            return (
              <div className="modal-background" onClick={props.closeModal} />
            );
          case "editPost":
            return (
              <div className="modal-background" onClick={props.closeModal}>
                <EditPostModal />
              </div>
            );
          case "deletePost":
            return (
              <div className="modal-background" onClick={props.closeModal}>
                <DeletePostModal />
              </div>
            );
          case "editProfile":
            return (
              <div className="modal-background" onClick={props.closeModal}>
                <EditProfileModal />
              </div>
            );
          default:
            return (
              <div className="modal-background" onClick={props.closeModal} />
            );
        }
    }
};

const msp = state => {
  return {
    modal: state.ui.modal,
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(Modal);
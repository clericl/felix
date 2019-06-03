import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modal_actions';

const Modal = props => {
    if (!props.modal) {
        return null;
    } else {
        return (
            <div className="modal-background" onClick={props.closeModal} />
        )
    }
}

const msp = state => {
  return {
    modal: state.ui.modal
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(Modal);
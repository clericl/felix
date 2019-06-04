import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import { RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';

const modalReducer = (state = null, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            return null;
        case RECEIVE_POST:
            return null;
        case REMOVE_POST:
            return null;
        default:
            return state;
    }
};

export default modalReducer;
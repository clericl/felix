import RECEIVE_SESSION_ERRORS
import RECEIVE_CURRENT_USER
import CLEAR_ERRORS

const _nullErrors = [];

const sessionErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);

    switch (action.type) {

        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        
        case RECEIVE_CURRENT_USER:
            return _nullErrors;

        case CLEAR_ERRORS:
            return _nullErrors;
        
        default:
            return state;
    }
}
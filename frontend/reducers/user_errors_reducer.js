import { RECEIVE_USER_ERRORS } from '../actions/user_actions';

const userErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_USER_ERRORS:
            return [action.errors].flat();
        default:
            return [];
    }
};

export default userErrorsReducer;
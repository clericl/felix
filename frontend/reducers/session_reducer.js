import { merge } from 'lodash';
import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const _nullUser = {
    currentUser: null,
};

// currentUser points to a User object
// what do we need on hand to display?
// currentUser: {
//     id: 999,
//     name: "Some Garbage",
//     avatar: "somegarbageactivestoragekey"
// }

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);

    switch (action.type) {

        case RECEIVE_CURRENT_USER:
            const { currentUser } = action;
            return merge({}, currentUser)

        case LOGOUT_CURRENT_USER:
            return _nullUser;
            
        default:
            return state;
    }
}

export default sessionReducer;
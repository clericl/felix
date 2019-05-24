import { merge } from 'lodash';
import {
    RECEIVE_USER,
    RECEIVE_USERS,
    REMOVE_USER,
} from '../actions/user_actions';


const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {

        case RECEIVE_USER:
            return merge({}, state, action.user);

        case RECEIVE_USERS:
            return merge({}, state, action.users);

        case REMOVE_USER:
            const newState = merge({}, state);
            delete newState[action.user_id];
            return newState;

        default:
            return state;

    }
};

export default usersReducer;


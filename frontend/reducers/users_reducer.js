import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_USER:
            const newState = merge({}, state, action.user);
            delete newState[Object.keys(action.user)[0]];
            newState[Object.keys(action.user)[0]] = Object.values(action.user)[0];
            return newState;
        case RECEIVE_USERS:
            return merge({}, state, action.users);
        default:
            return state;
    }
};

export default usersReducer;
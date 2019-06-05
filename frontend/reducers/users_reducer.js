import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_USER:
            newState = merge({}, state, action.user);
            delete newState[Object.keys(action.user)[0]];
            newState[Object.keys(action.user)[0]] = Object.values(action.user)[0];
            return newState;
        case RECEIVE_USERS:
            newState = merge({}, state, action.users);
            Object.keys(action.users).forEach(key => {
                delete newState[key];
                newState[key] = action.users[key];
            });
            return newState;
        default:
            return state;
    }
};

export default usersReducer;
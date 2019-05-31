import { RECEIVE_FRIEND } from '../actions/friend_actions';
import { merge } from 'lodash';

const friendsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_FRIEND:
            return merge({}, state, action.friend);
        default:
            return state;
    }
};

export default friendsReducer;
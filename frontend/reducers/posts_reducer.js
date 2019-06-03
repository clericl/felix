import { RECEIVE_POST } from '../actions/post_actions';
import { merge } from 'lodash';

const postsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_POST:
            delete newState[Object.keys(action.post)[0]];
            newState[Object.keys(action.post)[0]] = Object.values(action.post)[0];
            return newState;
        default:
            return state;
    }
};

export default postsReducer;
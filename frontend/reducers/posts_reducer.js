import {
    RECEIVE_POST,
    RECEIVE_POSTS,
    REMOVE_POST
} from '../actions/post_actions';
import { merge } from 'lodash';

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch(action.type) {
        case RECEIVE_POST:
            return merge({}, state, action.post);
        case RECEIVE_POSTS:
            return merge({}, state, action.posts);
        case REMOVE_POST:
            const newState = merge({}, state);
            delete newState[action.postId];
            return newState;
        default:
            return state;
    }
};

export default postsReducer;
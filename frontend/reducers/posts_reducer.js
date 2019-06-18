import {
    RECEIVE_POST,
    RECEIVE_POSTS,
    REMOVE_POST
} from '../actions/post_actions';
import { merge } from 'lodash';

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    
    switch(action.type) {
        case RECEIVE_POST:
            newState = merge({}, state, action.post);
            delete newState[Object.keys(action.post)[0]];
            newState[Object.keys(action.post)[0]] = Object.values(action.post)[0];
            return newState;
        case RECEIVE_POSTS:
            newState = merge({}, state, action.posts);
            Object.keys(action.posts).forEach(key => {
                delete newState[key];
                newState[key] = action.posts[key];
            });
            return newState;
        case REMOVE_POST:
            newState = merge({}, state);
            delete newState[action.postId];
            return newState;
        default:
            return state;
    }
};

export default postsReducer;
import { merge } from 'lodash';
import { RECEIVE_PHOTO } from '../actions/photo_actions';

const photosReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PHOTO:
            return merge({}, state, action.photo);
        // case RECEIVE_POSTS:
        //     newState = merge({}, state, action.posts);
        //     Object.keys(action.posts).forEach(key => {
        //         delete newState[key];
        //         newState[key] = action.posts[key];
        //     });
        //     return newState;
        // case REMOVE_POST:
        //     newState = merge({}, state);
        //     delete newState[action.postId];
        //     return newState;
        default:
            return state;
    }
};

export default photosReducer;
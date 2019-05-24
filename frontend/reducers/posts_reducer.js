import {
    RECEIVE_POST,
    RECEIVE_POSTS,
    REMOVE_POST,
} from '../actions/post_actions';

const postsReducer = (state = {}, action) => {

    Object.freeze(state);

    switch (action.type) {

        case RECEIVE_POSTS:
            // action.posts
            return merge({}, state, action.posts);

        case RECEIVE_POST:
            // action.post
            return merge({}, state, action.like);

        case REMOVE_POST:
            // action.post_id
            const newState = merge({}, state);
            delete newState[action.post_id];
            return newState;

        default:
            return state;

    }
};

export default postsReducer;
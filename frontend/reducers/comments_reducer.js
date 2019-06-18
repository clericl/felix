import {
    RECEIVE_COMMENT,
    RECEIVE_COMMENTS,
    REMOVE_COMMENT
} from '../actions/comment_actions';
import { merge } from 'lodash';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_COMMENT:
            newState = merge({}, state, action.comment);
            delete newState[Object.keys(action.comment)[0]];
            newState[Object.keys(action.comment)[0]] = Object.values(action.comment)[0];
            return newState;
        case RECEIVE_COMMENTS:
            newState = merge({}, state, action.comments);
            Object.keys(action.comments).forEach(key => {
                delete newState[key];
                newState[key] = action.comments[key];
            });
            return newState;
        case REMOVE_COMMENT:
            newState = merge({}, state);
            delete newState[action.commentId];
            return newState;
        default:
            return state;
    }
};

export default commentsReducer;
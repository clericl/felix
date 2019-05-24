import { merge } from 'lodash';
import {
    RECEIVE_COMMENTS,
    RECEIVE_COMMENT,
    REMOVE_COMMENT
} from '../actions/comment_actions';


const commentsReducer = (state = {}, action) => {

    Object.freeze(state);

    switch (action.type) {

        case RECEIVE_OBJECT_COMMENTS:
            // action.comments
            return merge({}, state, comments);
        
        case RECEIVE_OBJECT_COMMENT:
            // action.comment
            return merge({}, state, comment);

        case REMOVE_OBJECT_COMMENT:
            // action.comment_id
            const newState = merge({}, state);
            delete newState[action.comment_id];
            return newState;
        
        default:
            return state;
    }
};

export default commentsReducer;
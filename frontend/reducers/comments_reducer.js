import { merge } from 'lodash';
import {
    RECEIVE_OBJECT_COMMENTS,
    RECEIVE_OBJECT_COMMENT,
    REMOVE_OBJECT_COMMENT
} from '../actions/comment_actions';


const likesReducer = (state = {}, action) => {\

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
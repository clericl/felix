import { merge } from 'lodash';
import {
    RECEIVE_OBJECT_LIKES,
    RECEIVE_OBJECT_LIKE,
    REMOVE_OBJECT_LIKE
} from '../actions/like_actions';


const likesReducer = (state = {}, action) => {

    Object.freeze(state);

    switch (action.type) {

        case RECEIVE_OBJECT_LIKES:
            // action.likes
            return merge({}, state, action.likes);
        
        case RECEIVE_OBJECT_LIKE:
            // action.like
            return merge({}, state, action.like);

        case REMOVE_OBJECT_LIKE:
            // action.like_id
            const newState = merge({}, state);
            delete newState[action.like_id];
            return newState;
        
        default:
            return state;
            
    }
};

export default likesReducer;


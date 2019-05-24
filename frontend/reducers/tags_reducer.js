import { merge } from 'lodash';
import {
    RECEIVE_OBJECT_TAGS,
    RECEIVE_OBJECT_TAG,
    REMOVE_OBJECT_TAG
} from '../actions/tag_actions';


const TagsReducer = (state = {}, action) => {

    Object.freeze(state);

    switch (action.type) {

        case RECEIVE_OBJECT_TAGS:
            // action.tags
            return merge({}, state, action.tags);

        case RECEIVE_OBJECT_TAG:
            // action.tag
            return merge({}, state, action.tag);

        case REMOVE_OBJECT_TAG:
            // action.tag_id
            const newState = merge({}, state);
            delete newState[action.tag_id];
            return newState;

        default:
            return state;

    }
};

export default TagsReducer;


import { merge } from 'lodash';
import { RECEIVE_PHOTO, RECEIVE_PHOTOS } from '../actions/photo_actions';

const photosReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PHOTO:
            return merge({}, state, action.photo);
        case RECEIVE_PHOTOS:
            return merge({}, state, action.photos);
        default:
            return state;
    }
};

export default photosReducer;
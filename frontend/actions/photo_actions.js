import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = "RECEIVE_PHOTO";

export const receivePhoto = photo => {
    return {
        type: RECEIVE_PHOTO,
        photo,
    };
};

export const submitPhoto = photo => dispatch => {
    return PhotoAPIUtil.submitPhoto(photo).then(
        res => dispatch(receivePhoto(res))
    );
};
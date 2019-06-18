import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";

export const receivePhoto = photo => {
    return {
        type: RECEIVE_PHOTO,
        photo,
    };
};

export const receivePhotos = photos => {
    return {
        type: RECEIVE_PHOTOS,
        photos,
    };
};

export const submitPhoto = photo => dispatch => {
    return PhotoAPIUtil.submitPhoto(photo).then(
        res => dispatch(receivePhoto(res))
    );
};

export const fetchPhotos = (id, type) => dispatch => {
    return PhotoAPIUtil.fetchPhotos(id, type).then(
        res => dispatch(receivePhotos(res))
    );
};
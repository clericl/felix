import * as ActionAPIUtil from '../util/action_api_util';

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";


export const receiveLikes = likes => ({
    type: RECEIVE_LIKES,
    likes
});

export const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

export const removeLike = like => ({
    type: REMOVE_LIKE,
    like
});


export const fetchLikes = () => dispatch => (
    ActionAPIUtil.fetchLikes().then(likes => dispatch(receiveLikes(likes)))
);

export const fetchLike = () => dispatch => (
    ActionAPIUtil.fetchLike().then(like => dispatch(receiveLike(like)))
);

export const createLike = () => dispatch => (
    ActionAPIUtil.createLike().then(
        like => { 
            dispatch(receiveLike(like));
            dispatch(clearErrors());
        },
        // err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const deleteLike = like => dispatch => (
    ActionAPIUtil.destroyLike(like).then(like => dispatch(removeLike(like.id)))
)


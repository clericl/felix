import * as ActionAPIUtil from '../util/action_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";


export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
});

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

export const removeComment = comment => ({
    type: REMOVE_COMMENT,
    comment
});


export const fetchComments = () => dispatch => (
    ActionAPIUtil.fetchComments().then(likes => dispatch(receiveLikes(likes)))
);

export const fetchComment = () => dispatch => (
    ActionAPIUtil.fetchComment().then(comment => dispatch(receiveComment(comment)))
);

export const createComment = () => dispatch => (
    ActionAPIUtil.createComment().then(
        comment => {
            dispatch(receiveComment(comment));
            dispatch(clearErrors());
        },
        // err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const updateComment = () => dispatch => (
    ActionAPIUtil.updateComment().then(comment => dispatch(receiveComment(comment)))
);

export const deleteComment = comment => dispatch => (
    ActionAPIUtil.destroyComment(comment).then(comment => dispatch(removeComment(comment.id)))
)
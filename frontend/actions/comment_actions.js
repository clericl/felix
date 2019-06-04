import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment,
    };
};

export const receiveComments = comments => {
    return {
        type: RECEIVE_COMMENTS,
        comments,
    };
};

export const removeComment = commentId => {
    return {
        type: REMOVE_COMMENT,
        commentId,
    };
};

export const createComment = comment => dispatch => {
    return CommentAPIUtil.createComment(comment).then(
        res => dispatch(receiveComment(res))
    );
};

// export const fetchComment = commentId => dispatch => {
//     return CommentAPIUtil.fetchComment(commentId).then(
//         res => dispatch(receiveComment(res))
//     );
// };

export const refetchComments = (postId, offset) => dispatch => {
    return PostAPIUtil.refetchComments(postId, offset).then(
        res => dispatch(receiveComments(res))
    );
};

export const editComment = comment => dispatch => {
    return CommentAPIUtil.editComment(comment).then(
        res => dispatch(receiveComment(res))
    );
};

export const deleteComment = postId => dispatch => {
    return CommentAPIUtil.deleteComment(postId).then(
        res => dispatch(removeComment(res))
    );
};
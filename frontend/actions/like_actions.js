import * as LikeAPIUtil from '../util/like_api_util';

import { receivePost } from './post_actions';
import { receiveComment } from './comment_actions';

export const toggleLikePost = (userId, likeableId) => dispatch => {
    return LikeAPIUtil.findLike(userId, "Post", likeableId).then(
        likeId => LikeAPIUtil.destroyLike(likeId).then(
            res => dispatch(receivePost(res))),
        err => LikeAPIUtil.createLike(userId, "Post", likeableId).then(
            res => dispatch(receivePost(res)))
    );
};


export const toggleLikeComment = (userId, likeableId) => dispatch => {
    return LikeAPIUtil.findLike(userId, "Comment", likeableId).then(
        likeId => LikeAPIUtil.destroyLike(likeId).then(
            res => dispatch(receiveComment(res))),
        err => LikeAPIUtil.createLike(userId, "Comment", likeableId).then(
            res => dispatch(receiveComment(res)))
    );
};
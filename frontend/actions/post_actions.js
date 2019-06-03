import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_POST = "RECEIVE_POST";

export const receivePost = post => {
    return {
        type: RECEIVE_POST,
        post,
    };
};

export const createPost = post => dispatch => {
    return PostAPIUtil.createPost(post).then(
        res => dispatch(receivePost(res))
    );
};

export const fetchPost = postId => dispatch => {
    return PostAPIUtil.fetchPost(postId).then(
        res => dispatch(receivePost(res))
    );
};
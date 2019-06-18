import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const REMOVE_POST = "REMOVE_POST";

export const receivePost = post => {
    return {
        type: RECEIVE_POST,
        post,
    };
};

export const receivePosts = posts => {
    return {
        type: RECEIVE_POSTS,
        posts,
    };
};

export const removePost = postId => {
    return {
        type: REMOVE_POST,
        postId,
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

export const editPost = post => dispatch => {
    return PostAPIUtil.editPost(post).then(
        res => dispatch(receivePost(res))
    );
};

export const deletePost = postId => dispatch => {
    return PostAPIUtil.deletePost(postId).then(
        res => dispatch(removePost(res))
    );
};

export const refetchPosts = (userId, postOffset) => dispatch => {
    return PostAPIUtil.refetchPosts(userId, postOffset).then(
        res => dispatch(receivePosts(res))
    );
};

export const refetchFeed = (userId, receivedPosts) => dispatch => {
    return PostAPIUtil.refetchFeed(userId, receivedPosts).then(
        res => dispatch(receivePosts(res))
    );
};
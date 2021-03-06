export const createPost = post => {
    return $.ajax({
        method: "POST",
        url: "api/posts",
        data: post,
        contentType: false,
        processData: false
    });
};

export const fetchPost = postId => {
    return $.ajax({
        url: `api/posts/${postId}`,
    });
};

export const editPost = post => {
    return $.ajax({
        method: "PATCH",
        url: `api/posts/${post.id}`,
        data: {
            post: {
                body: post.body,
            },
        },
    });
};

export const deletePost = postId => {
    return $.ajax({
        method: "DELETE",
        url: `api/posts/${postId}`,
    });
};

export const refetchPosts = (userId, postOffset) => {
    return $.ajax({
        url: "api/posts/batch",
        data: {
            user_id: userId,
            offset: postOffset,
        },
    });
};

export const refetchFeed = (userId, receivedPosts) => {
    return $.ajax({
        url: "api/posts/feed",
        data: {
            user_id: userId,
            received_posts: receivedPosts || [],
        },
    });
};
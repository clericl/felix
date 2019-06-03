export const createPost = post => {
    return $.ajax({
        method: "POST",
        url: "api/posts",
        data: {
            post: post,
        },
    });
};

export const fetchPost = postId => {
    return $.ajax({
        url: `api/posts/${postId}`,
    });
};

// export const fetchUserPosts = userId => {
//     return $.ajax({
//         url:
//     })
// }
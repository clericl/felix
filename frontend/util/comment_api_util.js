export const createComment = comment => {
    return $.ajax({
        method: "POST",
        url: "api/comments",
        data: {
            comment: {
                author_id: comment.authorId,
                parent_id: comment.parentId,
                post_id: comment.postId,
                body: comment.body,
            },
        },
    });
};

export const editComment = comment => {
    return $.ajax({
        method: "PATCH",
        url: `api/comments/${comment.id}`,
        data: {
            comment: {
                body: comment.body
            },
        },
    });
};

export const deleteComment = commentId => {
    return $.ajax({
        method: "DELETE",
        url: `api/comments/${commentId}`,
    });
};

export const refetchComments = (postId, offset) => {
    return $.ajax({
        url: "api/comments/batch",
        data: {
            post_id: postId,
            offset: offset,
        },
    });
};
export const createLike = (userId, likeableType, likeableId) => {
    return $.ajax({
        method: "POST",
        url: "api/likes",
        data: {
            like: {
                user_id: userId,
                likeable_type: likeableType,
                likeable_id: likeableId,
            },
        },
    });
};

export const findLike = (userId, likeableType, likeableId) => {
    return $.ajax({
        url: "api/find_like",
        data: {
            user_id: userId,
            likeable_type: likeableType,
            likeable_id: likeableId,
        },
    });
};

export const destroyLike = likeId => {
    return $.ajax({
        method: "DELETE",
        url: `api/likes/${likeId}`,
    });
};
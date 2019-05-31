export const addFriend = (userId, friendId) => {
    return $.ajax({
        method: "POST",
        url: "api/friend_requests",
        data: {
            friend_request: {
                user_id: userId,
                friend_id: friendId,
            }
        }
    });
};

export const confirmRequest = (friendId) => {
    return $.ajax({
        method: "PATCH",
        url: `api/friend_requests/${friendId}`,
        data: {
            friend_request: {
                status: "accepted"
            }
        }
    });
};
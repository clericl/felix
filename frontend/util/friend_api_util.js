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

export const confirmFriend = friendId => {
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

export const deleteFriend = friendId => {
    return $.ajax({
        method: "DELETE",
        url: `api/friend_requests/${friendId}`,
    });
};

export const findFriendId = (userId, friendId) => {
    return $.ajax({
        method: "GET",
        url: "api/find_friend",
        data: {
            friend_request: {
                user_id: userId,
                friend_id: friendId,
            }
        }
    });
};
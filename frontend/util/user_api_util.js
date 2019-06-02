export const fetchUser = userId => {
    return $.ajax({
        url: `api/users/${userId}`,
    });
};

export const fetchUsers = userIds => {
    return $.ajax({
        url: "api/users",
        data: {
            users: userIds,
        },
    });
};
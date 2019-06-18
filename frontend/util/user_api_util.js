export const fetchUser = userId => {
    return $.ajax({
        url: `api/users/${userId}`,
    });
};

export const fetchFriends = userId => {
    return $.ajax({
        url: "api/users",
        data: {
            user_id: userId,
        },
    });
};

export const editUser = user => {
    return $.ajax({
        method: "PATCH",
        url: `api/users/${user.id}`,
        data: {
            user: {
                first_name: user.firstName,
                last_name: user.lastName,
                birthday: user.birthday,
                bio: user.bio,
                title: user.title,
                workplace: user.workplace,
                current_city: user.currentCity,
                hometown: user.hometown,
                default_img_url: user.defaultImgUrl,
                cover_photo_url: user.coverPhotoUrl,
            },
        },
    });
};
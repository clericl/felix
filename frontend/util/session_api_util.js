export const createUser = user => {
    return $.ajax({
        method: "POST",
        url: "api/users",
        data: {
            user: {
                first_name: user.firstName,
                last_name: user.lastName,
                email: user.email,
                password: user.password,
                gender: user.gender,
                birthday: user.birthday,
                default_img_url: window.catvatarUrl,
            },
        },
    });
};

export const loginUser = user => {
    return $.ajax({
        method: "POST",
        url: "api/session",
        data: {
            user
        },
    });
};

export const logoutUser = () => {
    return $.ajax({
        method: "DELETE",
        url: "api/session",
    });
};
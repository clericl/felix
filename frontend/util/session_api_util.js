export const createUser = user => {
    return $.ajax({
        method: "POST",
        url: "api/users",
        data: {
            user: {
                first_name: user.firstName,
                last_name: user.lastName,
                email: user.emailPhone,
                password: user.password,
            },
        },
    })
};

export const requestLogin = user => {
    return $.ajax({
        method: "POST",
        url: "api/session",
        data: {
            user
        },
    })
};

export const requestLogout = () => {
    return $.ajax({
        method: "DELETE",
        url: "api/session",
    })
};
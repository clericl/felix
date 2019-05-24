const requestLogin = (username, password) => {
    return $.ajax({
        method: "POST",
        url: "api/session",
        data: {
            username,
            password,
        },
    })
};

const requestLogout = () => {
    return $.ajax({
        method: "DELETE",
        url: "api/session",
    })
}
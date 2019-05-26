// this will fetch the detailed show--a user's profile page
export const fetchUser = userId => {
    return $.ajax({
        url: `api/users/${userId}`,
    });
};

// this will fetch the brief show for a user's friends, a group's members, etc.
// will be used for hover shows, mutual friends, messenger online list, etc.
export const fetchAssocUsers = (type, id) => {
    return $.ajax({
        url: "api/users",
        data: {
            type,
            id,
        },
    });
};


// if I ever get around to news feed deep settings. creates a sleep_user
// join object that news feed will check for before loading content.

// export const sleepUser = () => {
//     return $.ajax({
//         method: "POST",
//         url: some url
//     });
// };
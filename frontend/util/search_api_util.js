export const search = query => {
    return $.ajax({
        url: "api/search",
        data: {
            query,
        },
    });
};
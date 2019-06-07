export const submitPhoto = formData => {
    return $.ajax({
        url: '/api/photos',
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false
    });
};
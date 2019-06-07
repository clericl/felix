export const submitPhoto = formData => {
    return $.ajax({
        url: 'api/photos',
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false
    });
};

export const fetchPhotos = (photoableId, photoableType) => {
    return $.ajax({
        url: 'api/photos/batch',
        data: {
            photoable_id: photoableId,
            photoable_type: photoableType,
        },
    });
}
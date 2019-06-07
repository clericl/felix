json.set! @photo.id do
    json.photoableType @photo.photo.record.photoable_type
    json.photoableId @photo.photo.record.photoable_id
    json.url url_for(@photo.photo)
end
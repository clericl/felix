@photos.each do |photo|
    json.set! photo.id do
        json.id photo.id
        json.photoableType photo.photo.record.photoable_type
        json.photoableId photo.photo.record.photoable_id
        json.url url_for(photo.photo)
    end
end

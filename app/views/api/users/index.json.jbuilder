@users.each do |user|
    json.set! user.id do
        json.id user.id
        json.firstName user.first_name
        json.lastName user.last_name
        json.defaultImgUrl user.default_img_url
        json.coverPhotoUrl user.cover_photo_url
        json.friends user.friends
        json.pending user.pending
    end
end
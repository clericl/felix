json.set! user.id do
    json.id user.id
    json.firstName user.first_name
    json.lastName user.last_name
    json.birthday user.birthday
    json.defaultImgUrl user.default_img_url
    json.coverPhotoUrl user.cover_photo_url
    json.friends user.friends
    json.pending user.pending
    json.bio user.bio
    json.title user.title
    json.workplace user.workplace
    json.school user.school
    json.currentCity user.current_city
    json.hometown user.hometown
    json.receivedPosts user.received_posts
end
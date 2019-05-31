json.set! @user.id do
    json.id @user.id
    json.firstName @user.first_name
    json.lastName @user.last_name
    json.birthday @user.birthday
    json.defaultImgUrl @user.default_img_url
    json.friends @user.friends
    json.pending @user.pending
    # other fields as they are added
end

# json.friend_requests @user.friend_requests
json.set! @user.id do
    json.id @user.id
    json.firstName @user.first_name
    json.lastName @user.last_name
    json.birthday @user.birthday
    # other fields as they are added
end
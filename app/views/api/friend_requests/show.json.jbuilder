json.set! @friend.id do
    json.id @friend.id
    json.userId @friend.user_id
    json.friendId @friend.friend_id
    json.status @friend.status
end
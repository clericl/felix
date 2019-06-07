@user_results.each do |user|
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
        json.query [user.first_name, user.last_name].join(" ").downcase
    end
end

@post_results.each do |post|
    json.set! post.id do
        json.id post.id
        json.authorId post.author_id
        json.body post.body
        json.postableType post.postable_type
        json.postableId post.postable_id
        json.comments post.comments.pluck(:id)
        json.likes post.likes.pluck(:user_id)
        json.displayDate post.posted_at
        json.createdAt post.created_at
        json.updatedAt post.updated_at
        json.query post.body.split(" ")[post.body.split(" ").find_index { |word| word.include?(@query) }].downcase
    end
end
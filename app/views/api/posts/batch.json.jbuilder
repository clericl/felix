@posts.each do |post|
    json.set! post.id do
        json.id post.id
        json.authorId post.author_id
        json.postableType post.postable_type
        json.postableId post.postable_id
        json.comments post.comments.pluck(:id)
        json.likes post.likes.pluck(:id)
        json.body post.body
        json.displayDate post.posted_at
        json.createdAt post.created_at
        json.updatedAt post.updated_at
    end
end
@posts.each do |post|
    json.set! post.id do
        json.id post.id
        json.authorId post.author_id
        json.postableType post.postable_type
        json.postableId post.postable_id
        json.comments post.comments
        json.body post.body
        json.displayDate post.created_at.strftime("%B%e")
        json.createdAt post.created_at
        json.updatedAt post.updated_at
    end
end
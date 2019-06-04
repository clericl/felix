@posts.each do |post|
    json.set! post.id do
        json.id post.id
        json.authorId post.author_id
        json.postableType post.postable_type
        json.postableId post.postable_id
        json.body post.body
        json.createdAt post.created_at.strftime("%B%e")
        json.updatedAt post.updated_at.strftime("%B%e")
    end
end
@comments.each do |comment|
    json.set! comment.id do
        json.id comment.id
        json.authorId comment.author_id
        json.parentId comment.parent_id
        json.postId comment.post_id
        json.body comment.body
        json.createdAt comment.created_at
        json.updatedAt comment.updated_at
    end
end
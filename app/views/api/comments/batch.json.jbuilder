@comments.each do |comment|
    json.set! comment.id do
        json.id comment.id
        json.authorId comment.author_id
        json.parentId comment.parent_id
        json.postId comment.post_id
        json.body comment.body
        json.createdAt @post.created_at
        json.updatedAt @post.updated_at
    end
end
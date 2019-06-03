json.set! @post.id do
    json.id @post.id
    json.body @post.body
    json.postableType @post.postable_type
    json.postableId @post.postable_id
    json.createdAt @post.created_at
    json.updatedAt @post.updated_at
end
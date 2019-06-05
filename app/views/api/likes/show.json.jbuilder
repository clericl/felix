if @like.likeable_type == "Post"
    json.partial! '/api/posts/show.json.jbuilder', post: @object
elsif @like.likeable_type == "Comment"
    json.partial! '/api/comments/show.json.jbuilder', comment: @object
else
    {}
end
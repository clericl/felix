class Api::PostsController < ApplicationController

    def create
        @post = Post.new(post_params)
        @post.update(author_id: current_user.id)
        @post.save
        render :show
    end

    def update
        @post = Post.find(params[:id])
        @post.update(post_params)
        render :show
    end

    private

    def post_params
        params.require(:post).permit(:body, :postable_type, :postable_id)
    end

end
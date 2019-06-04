class Api::PostsController < ApplicationController

    def create
        @post = Post.new(post_params)
        @post.save
        render :show
    end

    def batch
        @posts = User
            .find(params[:user_id])
            .posts.order('updated_at DESC')
            .limit(5)
            .offset(params[:offset].to_i * 5)
            
        render :batch
    end

    def update
        @post = Post.find(params[:id])
        @post.update(post_params)
        render :show
    end

    def destroy
        @post = Post.find(params[:id])
        @post.delete
        render json: @post.id
    end

    private

    def post_params
        params.require(:post).permit(:author_id, :body, :postable_type, :postable_id)
    end

end
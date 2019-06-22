class Api::PostsController < ApplicationController

    def create
        @post = Post.new(post_params)
        @post.save
        render :show
    end

    def batch
        @posts = User
            .find(params[:user_id])
            .posts
            .limit(5)
            .offset(params[:offset].to_i * 5)
            
        render :batch
    end

    def show
        @post = Post.find(params[:id])
        render :show
    end

    def feed
        friends = User.find(params[:user_id]).friends
        
        if params[:received_posts].nil?
            @posts = Post
                .where(
                    # "(author_id IN (?)) OR (postable_id IN (?))",
                    "author_id = ? OR (author_id IN (?)) OR (postable_id IN (?))",
                    params[:user_id],
                    friends,
                    friends
                ).order("updated_at DESC")
                .limit(5)
        else
            @posts = Post
                .where(
                    "(author_id = ? OR (author_id IN (?)) OR (postable_id IN (?))) AND id NOT IN (?)",
                    params[:user_id],
                    friends,
                    friends,
                    params[:received_posts]
                ).order("updated_at DESC")
                .limit(5)
        end
        
        render :batch
    end

    def update
        @post = Post.find(params[:id])
        @post.update(post_params)
        render :show
    end

    def destroy
        @post = Post.find(params[:id])
        @post.destroy
        render json: @post.id
    end

    private

    def post_params
        params.require(:post).permit(:author_id, :body, :postable_type, :postable_id, photos: [])
    end

end
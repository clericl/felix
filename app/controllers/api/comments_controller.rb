class Api::CommentsController < ApplicationController

    def create
        @comment = Comment.new(comment_params)
        @comment.save
        render :show
    end

    def batch
        @comments = Post
            .find(params[:post_id])
            .posts.order('updated_at DESC')
            .limit(50)
            .offset(params[:offset].to_i * 50)

        render :batch
    end

    def update
        @comment = Comment.find(params[:id])
        @comment.update(comment_params)
        render :show
    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.delete
        render json: @comment.id
    end

    private

    def comment_params
        params.require(:comment).permit(:author_id, :parent_id, :post_id, :body)
    end

end
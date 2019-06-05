class Api::LikesController < ApplicationController

    def create
        @like = Like.new(like_params)
        if @like.save
            @object = @like.likeable_type.constantize.find(@like.likeable_id)
            render :show
        else
            render json: @like.errors.values.flatten, status: 422
        end
    end

    def find
        @like = Like.where(
            "user_id = ? AND likeable_type = ? AND likeable_id = ?",
            params[:user_id],
            params[:likeable_type],
            params[:likeable_id]
        ).first

        if @like
            render plain: @like.id
        else
            render json: ["ya fucked up"], status: 422
        end
    end

    def destroy
        @like = Like.find(params[:id])
        if @like.delete
            @object = @like.likeable_type.constantize.find(@like.likeable_id)
            render :show
        else
            render json: like.errors.values.flatten, status: 422
        end
    end

    private

    def like_params
        params.require(:like).permit(:user_id, :likeable_type, :likeable_id)
    end

end
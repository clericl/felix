class Api::FriendRequestsController < ApplicationController

    def find
        @friend = FriendRequest.where(
            "(user_id = ? AND friend_id = ?) OR (user_id = ? AND friend_id = ?)",
            params[:friend_request][:user_id],
            params[:friend_request][:friend_id],
            params[:friend_request][:friend_id],
            params[:friend_request][:user_id]
        ).first
        if @friend
            render plain: @friend.id
        else
            render json: ["Couldn't find what you were looking for"], status: 422
        end
    end

    def create
        @friend = FriendRequest.new(friend_request_params)
        if @friend.save
            render :show, friend: @friend
        else
            render json: @friend.errors.values.flatten, status: 422
        end
    end

    def update
        @friend = FriendRequest.find(params[:id])
        if @friend.update(status: params[:friend_request][:status])
            render :show
        else
            render json: @friend.errors.values.flatten, status: 422
        end
    end

    def destroy
        @friend = FriendRequest.find(params[:id])
        if @friend.delete
            render :show
        else
            render json: @friend.errors.values.flatten, status: 422
        end
    end

    private

    def friend_request_params
        params.require(:friend_request).permit(:user_id, :friend_id, :status)
    end

end
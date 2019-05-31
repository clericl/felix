class Api::FriendRequestsController < ApplicationController

    def create
        @friend = FriendRequest.new(friend_request_params)
        if @friend.save
            render :show, friend: @friend
        else
            render json: @friend.errors.values.flatten, status: 422
        end
    end

    private

    def friend_request_params
        params.require(:friend_request).permit(:user_id, :friend_id, :status)
    end

end
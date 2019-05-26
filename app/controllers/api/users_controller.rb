class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render "api/users/show.json.jbuilder", user: @user
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private 

    def user_params
        params.require(:user).permit(
            :first_name,
            :last_name,
            :username,
            :password,
            :email,
            :gender,
            :birthday
        )
    end

end
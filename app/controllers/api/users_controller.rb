class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show, user: @user
        else
            render json: @user.errors.values.flatten, status: 422
        end
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    private 

    def user_params
        params.require(:user).permit(
            :first_name,
            :last_name,
            :password,
            :email,
            :gender,
            :birthday
        )
    end

end
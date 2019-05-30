class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render "api/sessions/show.json.jbuilder", user: @user
        else
            render json: @user.errors.values.flatten, status: 422
        end
    end

    def show
        @user = User.find(params[:id])
        # @user = User.includes(:friended_users).find(params[:id])
        # include associated pictures and friends in db request
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
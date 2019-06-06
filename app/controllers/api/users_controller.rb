class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render 'api/sessions/show.json.jbuilder', user: @user
        else
            render json: @user.errors.values.flatten, status: 422
        end
    end

    def index
        friends = User.find(params[:user_id]).friends
        @users = User.find(friends)
        render :index
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    def update 
        @user = User.find(params[:id])
        @user.update(user_params)
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
            :birthday,
            :bio,
            :title,
            :workplace,
            :school,
            :current_city,
            :hometown,
            :default_img_url
        )
    end

end
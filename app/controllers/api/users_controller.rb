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
        @user = User.find_by(id: params[:id])
        if @user
            render :show
        else
            render json: ["no user"], status: 404
        end
    end

    def update 
        @user = User.find(params[:id])
        @user.update(user_params)
        render :show
    end

    def search
        query = ['%', params[:query], '%'].join("")

        @user_results = User
            .where(
                "first_name ILIKE ? OR last_name ILIKE ?",
                query,
                query
            )
            .limit(10)

        @post_results = Post
            .joins(:author)
            .where(
                "body ILIKE ?",
                query,
            )
            .limit(10)

        @query = params[:query]
        render :search
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
            :default_img_url,
            :cover_photo_url
        )
    end

end
class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by(email: params[:user][:email])
        if @user
            if @user.is_password?(params[:user][:password])
                login(@user)
                render :show, user: @user
            else
                render json: ["password"], status: 422
            end
        else
            render json: ["email"], status: 422
        end
    end

    def destroy
        if logged_in?
            logout!
            render json: {}
        else
            render json: ["Couldn't find what you were looking for"], status: 404
        end
    end

end
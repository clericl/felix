class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by(email: params[:user][:email])
        if @user
            if @user.is_password?(params[:user][:password])
                login(@user)
                render 'api/users/user.json.jbuilder'
            else
                render json: ["The password you've entered is incorrect. Forgot Password?"], status: 422
            end
        else
            render json: ["The email you've entered doesn't match any account. Sign up for an account."], status: 422
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
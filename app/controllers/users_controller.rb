class UsersController < ApplicationController
    def show 
        user = User.find(session[:user_id])
        render json: user, status: :ok
    end 

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end 
    

    private
    def user_params
        params.permit(:username, :password)
    end
end

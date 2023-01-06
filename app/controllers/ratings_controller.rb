class RatingsController < ApplicationController


    def index 
        ratings = Rating.all
        render json: ratings,status: :ok
    end

    

    def create
        rating = Rating.create(rating_params)
        render json: rating, status: :created
    end


    private 
    def rating_params
        params.permit(:id,:game_rating, :user_id,:game_image_id)
    end
end

class RatingsController < ApplicationController


    def create
        rating = Rating.create(rating_params)
        render json: rating, status: :created
    end


    private 
    def rating_params
        params.permit(:id,:game_rating, :user_id,:game_image_id)
    end
end

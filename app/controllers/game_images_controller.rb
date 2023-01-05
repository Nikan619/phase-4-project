class GameImagesController < ApplicationController

def index
    games = GameImage.all
    render json:games, status: :ok
end
def create 
    game = GameImage.create(game_image_params)
    render json:game, status: :created
end

private
def game_image_params
    params.permit(:name,:image)
end


end


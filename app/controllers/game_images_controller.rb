class GameImagesController < ApplicationController

def index
    games = GameImage.all
    render json:games, status: :ok
end
def create 
    game = GameImage.create(game_image_params)
    render json:game, status: :created
end

def destroy 
    game = GameImage.find(params[:id])
    game.destroy
    head :no_content
end

def update 
    game = GameImage.find(params[:id])
    game.update(game_image_params)
    render json:game, status: :accepted
end

private
def game_image_params
    params.permit(:name,:image)
end


end


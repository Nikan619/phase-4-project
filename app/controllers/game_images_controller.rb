class GameImagesController < ApplicationController

def index
    games = GameImage.all
    render json:games, status: :ok
end


end

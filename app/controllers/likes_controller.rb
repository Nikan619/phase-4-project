class LikesController < ApplicationController
    def create
        session[:likes] || =[]
        session[:likes] << params[:product_id]
        render json: {status: 'OK'}
    end
end

class ApplicationController < ActionController::API

include ActionController::Cookies

before_action :authorize

def authorize
    @current_user = User.find_by(id: session[:user_id])
   render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
end

end

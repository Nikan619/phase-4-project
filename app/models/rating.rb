class Rating < ApplicationRecord
   belongs_to :game_image
   belongs_to :user

def goodrating
   rating = Rating.where(game_image_id: game_image.id).first
end
  

end

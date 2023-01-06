class User < ApplicationRecord
    has_secure_password
    has_many :ratings
    has_many :game_images, through: :ratings
        

    validates :username, presence: true, uniqueness: true
end

class User < ApplicationRecord
    has_secure_password
    has_many :likes
    has_many :game_images, through: :likes
        

    validates :username, presence: true, uniqueness: true
end

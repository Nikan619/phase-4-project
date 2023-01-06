class CreateRatings < ActiveRecord::Migration[7.0]
  def change
    create_table :ratings do |t|
    t.string :game_rating
    t.belongs_to :user
    t.belongs_to :game_image
  end
end
end

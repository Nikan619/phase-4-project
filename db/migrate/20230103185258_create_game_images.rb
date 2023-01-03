class CreateGameImages < ActiveRecord::Migration[7.0]
  def change
    create_table :game_images do |t|
      t.string :name
      t.string :image

      t.timestamps
    end
  end
end

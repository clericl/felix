class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :liker_id, index: true
      t.references :likeable

      t.timestamps
    end
  end
end

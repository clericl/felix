class AddPhotosTimestamps < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :created_at, :datetime, null: false
    add_column :photos, :updated_at, :datetime, null: false
  end
end

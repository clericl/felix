class AddIndexesToLikes < ActiveRecord::Migration[5.2]
  def change
    add_index :likes, :user_id
    change_column_null :likes, :user_id, false
    change_column_null :likes, :likeable_type, false
    change_column_null :likes, :likeable_id, false
  end
end

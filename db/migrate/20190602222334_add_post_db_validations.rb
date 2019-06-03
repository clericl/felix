class AddPostDbValidations < ActiveRecord::Migration[5.2]
  def change
    change_column_null :posts, :author_id, false
    change_column_null :posts, :body, false
    change_column :users, :bio, :string
  end
end

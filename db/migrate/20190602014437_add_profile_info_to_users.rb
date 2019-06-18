class AddProfileInfoToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :bio, :text
    add_column :users, :school, :string
    add_column :users, :title, :string
    add_column :users, :workplace, :string
    add_column :users, :hometown, :string
    add_column :users, :current_city, :string
  end
end

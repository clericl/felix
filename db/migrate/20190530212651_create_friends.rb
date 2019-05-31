class CreateFriends < ActiveRecord::Migration[5.2]
  def change
    create_table :friend_requests do |t|
      t.integer :user_id, null: false
      t.integer :friend_id, null: false
      t.string :status, null: false, default: "pending"

      t.timestamps
    end

    add_index :friend_requests, [:user_id, :friend_id], unique: true
    add_column :users, :default_img_url, :string
  end
end

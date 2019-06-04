class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false, index: true
      t.integer :parent_id
      t.text :body, null: false
    end
  end
end

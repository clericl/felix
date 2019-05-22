class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :author_id, index: true
      t.text :body, null: false
      t.references :commentable

      t.timestamps
    end
  end
end

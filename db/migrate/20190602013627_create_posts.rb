class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :author_id, index: true
      t.references :postable, polymorphic: true, index: true
      t.text :body

      t.timestamps
    end
  end
end

class AddPolymorphic < ActiveRecord::Migration[5.2]
  def change
    add_column :likes, :likeable_type, :string
    add_column :tags, :taggable_type, :string
    add_column :comments, :commentable_type, :string
  end
end

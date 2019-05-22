class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.references :taggable
      t.integer :tagger_id, index: true

      t.timestamps
    end
  end
end

class AddTimestampsToComments < ActiveRecord::Migration[5.2]
  def change
    add_timestamps(:comments, null: false)
  end
end

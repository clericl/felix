# == Schema Information
#
# Table name: friends
#
#  id         :bigint           not null, primary key
#  user_id    :integer
#  friend_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Friend < ApplicationRecord

    validates :friend_id, uniqueness: { scope: :user_id }

    belongs_to :friender,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :friendee,
        foreign_key: :friend_id,
        class_name: :User

end

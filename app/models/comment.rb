# == Schema Information
#
# Table name: comments
#
#  id               :bigint           not null, primary key
#  author_id        :integer
#  body             :text             not null
#  commentable_id   :bigint
#  commentable_type :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Comment < ApplicationRecord
    include Actionable

    validates :body, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

end

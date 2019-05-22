# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  author_id  :integer
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
    include Actionable

    validates :body, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
        
end

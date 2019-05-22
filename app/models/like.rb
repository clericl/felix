# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  liker_id      :integer
#  likeable_id   :bigint
#  likeable_type :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Like < ApplicationRecord

    validates :likeable_id, uniqueness: { scope: :liker_id }
    
    belongs_to :likeable, polymorphic: true

end

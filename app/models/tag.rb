# == Schema Information
#
# Table name: tags
#
#  id            :bigint           not null, primary key
#  taggable_id   :bigint
#  taggable_type :string
#  tagger_id     :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Tag < ApplicationRecord

    belongs_to :taggable, polymorphic: :true
    
end

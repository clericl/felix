# == Schema Information
#
# Table name: tags
#
#  id            :bigint           not null, primary key
#  taggable_id   :bigint
#  tagger_id     :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  taggable_type :string
#

require 'test_helper'

class TagTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

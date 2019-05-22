# == Schema Information
#
# Table name: comments
#
#  id               :bigint           not null, primary key
#  author_id        :integer
#  body             :text             not null
#  commentable_id   :bigint
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  commentable_type :string
#

require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

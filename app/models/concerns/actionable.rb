module Actionable
    extend ActiveSupport::Concern

    included do
        has_many :likes, as: :likeable
        has_many :tags, as: :taggable
        has_many :comments, as: :commentable
    end

end
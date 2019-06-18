class Comment < ApplicationRecord

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :post,
        foreign_key: :post_id,
        class_name: :Post

    belongs_to :parent,
        foreign_key: :parent_id,
        class_name: :Comment,
        optional: true

    has_many :children,
        foreign_key: :parent_id,
        class_name: :Comment,
        dependent: :destroy

    has_many :likes, as: :likeable
    
    def posted_at
        time_diff = Time.now - self.created_at
        if time_diff < 60
            return "1m"
        elsif time_diff < 3600
            return "#{time_diff.div(60)}m"
        elsif time_diff < 86400
            return "#{time_diff.div(3600)}hr"
        elsif time_diff < 604800
            return "#{time_diff.div(86400)}d"
        elsif time_diff < 31449600
            return "#{time_diff.div(604800)}w"
        else
            return "#{time_diff.div(31449600)}y"
        end
    end

end
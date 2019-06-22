class Post < ApplicationRecord 

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :postable, polymorphic: true
    
    has_many :comments, dependent: :destroy
    has_many :likes, as: :likeable
    has_many_attached :photos

    def posted_at
        time_diff = Time.now - self.created_at
        if time_diff < 60
            return "Just now"
        elsif time_diff < 120
            return "1 min"
        elsif time_diff < 3600
            return "#{time_diff.div(60)} mins"
        elsif time_diff < 7200
            return "1 hr"
        elsif time_diff < 86400
            return "#{time_diff.div(3600)} hrs"
        elsif time_diff < 172800
            return "Yesterday"
        elsif time_diff < 604800
            return "#{self.created_at.strftime("%B %e")} at #{self.created_at.strftime("%-I:%M %p")}"
        else
            return "#{self.created_at.strftime("%B %e")}"
        end
    end
    
end
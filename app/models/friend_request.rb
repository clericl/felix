class FriendRequest < ApplicationRecord

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User 

    has_one :target_user,
        foreign_key: :friend_id,
        class_name: :User
        
end

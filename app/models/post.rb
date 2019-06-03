class Post < ApplicationRecord 

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :postable, polymorphic: true

end
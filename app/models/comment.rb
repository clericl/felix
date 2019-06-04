class Comment < ApplicationRecord

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :post,
        foreign_key: :post_id,
        class_name: :Post

    belongs_to :parent,
        inverse_of: :children,
        optional: true

    has_many :children,
        inverse_of: :parent

end
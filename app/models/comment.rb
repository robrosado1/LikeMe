class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :commentable, polymorphic: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :commenter_id,
    class_name: :User
end

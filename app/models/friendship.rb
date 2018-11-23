class Friendship < ApplicationRecord
  validates :pending, inclusion: { in: [true, false] }

  belongs_to :requestor,
    primary_key: :id,
    foreign_key: :user1_id,
    class_name: :User

  belongs_to :acceptor,
    primary_key: :id,
    foreign_key: :user2_id,
    class_name: :User
end

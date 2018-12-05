class Friendship < ApplicationRecord
  validates :pending, inclusion: { in: [true, false] }
  validates :user1_id, uniqueness: { scope: :user2_id }
  validates :user2_id, uniqueness: { scope: :user1_id }

  belongs_to :requestor,
    primary_key: :id,
    foreign_key: :user1_id,
    class_name: :User

  belongs_to :acceptor,
    primary_key: :id,
    foreign_key: :user2_id,
    class_name: :User
end

class User < ApplicationRecord
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token
  attr_reader :password

  has_many :authored_posts,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: :Post

  has_many :wall_posts,
    foreign_key: :receiver_id,
    primary_key: :id,
    class_name: :Post

  has_many :comments,
    foreign_key: :commenter_id,
    primary_key: :id,
    class_name: :Comment

  has_many :sent_friendships,
    primary_key: :id,
    foreign_key: :user1_id,
    class_name: :Friendship

  has_many :friendees,
   through: :sent_friendships,
   source: :acceptor

  has_many :received_requests,
    primary_key: :id,
    foreign_key: :user2_id,
    class_name: :Friendship

  has_many :frienders,
    through: :received_requests,
    source: :requestor

  has_one_attached :profile_pic


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email);
    return nil unless user && user.is_password?(password)
    user
  end

  def reset_session_token!
    self.update_attributes(session_token: self.class.generate_session_token)
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def friends
    friend_status(false)
  end

  def all_pending
    friend_status(true)
  end

  def sent_pending
    self.sent_friendships.where(pending: true).map do |f|
      f.user2_id
    end
  end

  def received_waiting
    self.received_requests.where(pending: true).map do |f|
      f.user1_id
    end
  end

  private

  def ensure_session_token
    self.session_token ||= self.reset_session_token!
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def friend_status(pending)
    Friendship.find_by_sql([
      'SELECT (
        CASE user1_id
          WHEN ? 
          THEN user2_id
          ELSE user1_id
        END
      ) AS friend_id
      FROM
        friendships
      WHERE
        ? IN (user1_id, user2_id) AND pending = ?',
      self.id,
      self.id,
      pending
    ]).map { |f| f.friend_id }
  end

end

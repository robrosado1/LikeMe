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

  has_many :requested_friendships,
    primary_key: :id,
    foreign_key: :user1_id,
    class_name: :Friendship

  has_many :friendees,
   through: :requested_friendships,
   source: :acceptor

  has_many :pending_requests,
    primary_key: :id,
    foreign_key: :user2_id,
    class_name: :Friendship

  has_many :frienders,
    through: :pending_requests,
    source: :requestor


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
    requested = self.requested_friendships.select('user2_id')
      .where({ user1_id: self.id, pending: false}).to_a
  end

  private

  def ensure_session_token
    self.session_token ||= self.reset_session_token!
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

end

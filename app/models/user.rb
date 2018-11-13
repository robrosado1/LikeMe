class User < ApplicationRecord
  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, :name, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token
  attr_reader :password

  has_many :posts,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: :Post

  has_many :comments,
    foreign_key: :commenter_id,
    primary_key: :id,
    class_name: :Comment

  has_many :friends

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username);
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

  private

  def ensure_session_token
    self.session_token ||= self.reset_session_token!
  end

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

end

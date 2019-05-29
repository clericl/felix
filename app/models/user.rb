# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  birthday        :date             not null
#  email           :string           not null
#  gender          :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

    validates :email, presence: true, uniqueness: true
    validates :first_name, :last_name, :birthday, :gender, presence: true
    validates :gender, inclusion: { in: ["m", "f", "o"] }
    validates :password_digest, :session_token, presence: true, uniqueness: true

    validates :password, length: { minimum: 6, allow_nil: true }
    validate :password_not_common, :email_correct_format

    before_validation :ensure_session_token

    attr_reader :password

    # has_many :posts
    # has_many :comments
    # has_many :likes
    # has_many :friends
    # has_many :friended_users, through: :friends, source: :friendee

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user && user.is_password?(password)
            user 
        else
            nil 
        end
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    
    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end
    
    
    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save
        self.session_token
    end
    
    private
    
    def self.generate_session_token
        SecureRandom.urlsafe_base64(16)
    end
    
    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def password_not_common
        commons = [
            "123456",
            "123456789",
            "qwerty",    
            "password",
            "111111",
            "abc123",
            "iloveyou",
            "starwars",
            "welcome",
        ]
        if commons.include?(@password)
            errors.add(:base, "Please pick a stronger password.")
        end
    end

    def email_correct_format
        if self.email.split("@").length == 2
            if self.email.split(".").last.chars.length <= 3
                return true
            end
        elsif self.email.count("@") == 0
            if self.email.count('0123456789') == 10
                return true
            end
        end
        errors.add(:base, "Please enter a valid email address.")
    end

end

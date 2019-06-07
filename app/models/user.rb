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

    # validates :email, presence: true, uniqueness: true

    validates :email, presence: { message: "newemail" }
    validates :email, uniqueness: { message: "newemail" }
    validates :first_name, presence: { message: "fname" }
    validates :last_name, presence: { message: "lname" }
    validates :birthday, presence: { message: "birthday" }
    validates :gender, presence: { message: "gender" }
    validates :password_digest, :session_token, presence: true, uniqueness: true
    validates :password,
        length: { minimum: 6, allow_nil: true, message: "newpassword" }
    validate :email_correct_format

    before_validation :ensure_session_token, :ensure_capitalized, :ensure_default_img_url

    attr_reader :password

    has_many :friend_requests, dependent: :destroy
    has_many :posts, as: :postable, dependent: :destroy
    has_many :photos, as: :photoable, dependent: :destroy
    
    has_many :authored_posts,
        foreign_key: :author_id,
        class_name: :Post,
        dependent: :destroy
    
    has_many :comments,
        foreign_key: :author_id,
        class_name: :Comment,
        dependent: :destroy

    has_many :liked,
        foreign_key: :user_id,
        class_name: :Like,
        dependent: :destroy

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user && user.is_password?(password)
            user 
        else
            nil 
        end
    end

    def friends
        friends = FriendRequest.where(
            "status = 'accepted' AND (user_id = ? OR friend_id = ?)",
            self.id,
            self.id
        ).pluck(:user_id, :friend_id).flatten
        friends.delete(self.id)
        return friends
    end

    def pending
        self.friend_requests.where(status: "pending").pluck(:friend_id)
    end 

    def received_posts
        self.posts.pluck(:id)
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

    def ensure_default_img_url
        self.default_img_url ||= "https://i.imgur.com/EKXpljT.jpg"
    end

    def ensure_capitalized
        self.first_name.capitalize!
        self.last_name.capitalize!
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
            errors.add(:base, "strongerpassword")
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
        errors.add(:base, "email")
    end

end

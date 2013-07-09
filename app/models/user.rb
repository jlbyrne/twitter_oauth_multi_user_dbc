class User < ActiveRecord::Base
	validates :username, :oauth_token, :oauth_secret, :presence => true
	validates_uniqueness_of :oauth_token, :oauth_secret
end
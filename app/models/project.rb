class Project < ActiveRecord::Base
  has_many :users
  belongs_to :manager

  validates :name, presence: true, length: { minimum: 2 }
end

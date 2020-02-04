class ProjectUser < ActiveRecord::Base
  validates :project_id, presence: true
  validates :user_id, presence: true, uniqueness: { scope: :project_id }
end

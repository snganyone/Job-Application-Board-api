class ChangeAgencyIdToBeIntegerInJobs < ActiveRecord::Migration[6.0]
  def change
    change_column :jobs, :agency_id, :integer
  end
end

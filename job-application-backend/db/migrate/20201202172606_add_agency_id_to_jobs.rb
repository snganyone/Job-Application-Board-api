class AddAgencyIdToJobs < ActiveRecord::Migration[6.0]
  def change
    add_column :jobs, :agency_id, :string
  end
end

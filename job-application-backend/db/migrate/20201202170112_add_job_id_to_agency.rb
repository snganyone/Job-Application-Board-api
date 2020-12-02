class AddJobIdToAgency < ActiveRecord::Migration[6.0]
  def change
    add_column :agencies, :job_id, :integer
  end
end

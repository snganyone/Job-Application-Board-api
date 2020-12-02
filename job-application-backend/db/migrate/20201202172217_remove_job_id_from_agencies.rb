class RemoveJobIdFromAgencies < ActiveRecord::Migration[6.0]
  def change
    remove_column :agencies, :job_id, :string
  end
end

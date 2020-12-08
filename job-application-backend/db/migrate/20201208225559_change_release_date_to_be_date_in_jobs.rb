class ChangeReleaseDateToBeDateInJobs < ActiveRecord::Migration[6.0]
  def change
    change_column :jobs, :release_date, :date
  end
end

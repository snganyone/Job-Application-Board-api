class CreateJobs < ActiveRecord::Migration[6.0]
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :employer
      t.string :location
      t.string :description
      t.string :release_date
      t.string :job_type

      t.timestamps
    end
  end
end

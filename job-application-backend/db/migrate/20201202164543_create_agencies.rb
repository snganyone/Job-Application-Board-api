class CreateAgencies < ActiveRecord::Migration[6.0]
  def change
    create_table :agencies do |t|
      t.string :name
      t.string :bio
      t.string :type

      t.timestamps
    end
  end
end

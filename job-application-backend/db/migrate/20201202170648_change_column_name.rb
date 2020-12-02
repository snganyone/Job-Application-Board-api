class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :agencies, :type, :agency_type
  end
end

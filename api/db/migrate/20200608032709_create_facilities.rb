class CreateFacilities < ActiveRecord::Migration[5.1]
  def change
    create_table :facilities do |t|
      t.string :facility_name

      t.timestamps
    end
  end
end

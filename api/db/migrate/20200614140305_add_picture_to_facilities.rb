class AddPictureToFacilities < ActiveRecord::Migration[5.1]
  def change
    add_column :facilities, :picture, :string
  end
end

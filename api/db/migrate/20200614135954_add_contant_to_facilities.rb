class AddContantToFacilities < ActiveRecord::Migration[5.1]
  def change
    add_column :facilities, :content, :text
  end
end

class AddNameToChannels < ActiveRecord::Migration[6.1]
  def change
    add_column :channels, :name, :string
  end
end

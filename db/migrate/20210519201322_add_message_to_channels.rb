class AddMessageToChannels < ActiveRecord::Migration[6.1]
  def change
    add_column :channels, :message, :string
    add_index :channels, :message
  end
end

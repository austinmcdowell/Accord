class RemoveMessageFromChannel < ActiveRecord::Migration[6.1]
  def change
    remove_index :channels, :message
    remove_column :channels, :message, :string
  end
end

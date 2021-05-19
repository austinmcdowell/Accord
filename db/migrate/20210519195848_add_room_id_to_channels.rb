class AddRoomIdToChannels < ActiveRecord::Migration[6.1]
  def change
    add_column :channels, :room_id, :integer
    add_index :channels, :room_id
  end
end

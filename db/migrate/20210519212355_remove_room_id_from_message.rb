class RemoveRoomIdFromMessage < ActiveRecord::Migration[6.1]
  def change
    remove_index :messages, :room_id
    remove_column :messages, :room_id, :integer
  end
end

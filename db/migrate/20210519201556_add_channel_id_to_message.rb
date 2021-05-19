class AddChannelIdToMessage < ActiveRecord::Migration[6.1]
  def change
    add_column :messages, :channel_id, :integer
    add_index :messages, :channel_id
  end
end

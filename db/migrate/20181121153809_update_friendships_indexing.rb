class UpdateFriendshipsIndexing < ActiveRecord::Migration[5.2]
  def change
    add_column :friendships, :pending, :boolean, default: true, null: false
    add_index :friendships, :user1_id
    add_index :friendships, :user2_id
  end
end

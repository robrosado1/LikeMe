class EditCommentsTable < ActiveRecord::Migration[5.2]
  def change
    add_index :comments, :commenter_id
    change_column_null :comments, :commentable_id, false
    change_column_null :comments, :commentable_type, false
  end
end

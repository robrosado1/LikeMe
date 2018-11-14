class EditUserConstraints < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :name, true
    remove_column :users, :username
  end
end

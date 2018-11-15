class EditUserTableOtherInfo < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :name
    add_column :users, :fname, :string, default: 'New'
    add_column :users, :lname, :string
    add_column :users, :birthdate, :date
    add_column :users, :gender, :string
  end
end

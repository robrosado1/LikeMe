class EditUsersForBirthdate < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :birthdate
    add_column :users, :birthyear, :integer
    add_column :users, :birthday, :integer
    add_column :users, :birthmonth, :string
  end
end

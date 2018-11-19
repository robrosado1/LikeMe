# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Comment.destroy_all
Friendship.destroy_all

test_user = {password: 'starwars', email: 'test_email', fname: 'Lester',
  lname: 'Tester', birthday: 12, birthmonth: 'December', birthyear: 1980, gender: 'Male'}
demo_user = {password: 'gobbletyguck', email: 'demo_email', fname: 'Demo',
  lname: 'Daggerty', birthday: 4, birthmonth: 'March', birthyear: 1988, gender: 'Female'}


User.create!(test_user)
User.create!(demo_user)

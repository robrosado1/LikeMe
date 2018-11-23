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

test_user = {password: 'starwars', email: 'test_email@throwaway.email', fname: 'Lester',
  lname: 'Tester', birthday: 12, birthmonth: 'December', birthyear: 1980, gender: 'Male'}
demo_user = {password: 'gobbletyguck', email: 'demo_email@free.trial', fname: 'Damaris',
  lname: 'Daggerty', birthday: 4, birthmonth: 'March', birthyear: 1988, gender: 'Female'}
billy = {password: 'randomness', email: 'silly_billy@funny.guy', fname: 'Billy',
  lname: 'Smith', birthday: 9, birthmonth: 'November', birthyear: 1977, gender: 'Male'}
adelaide = {password: 'auspicious', email: 'adelaide@anberlin.rock', fname: 'Adelaide',
  lname: 'Benson', birthday: 5, birthmonth: 'October', birthyear: 1990, gender: 'Female'}
dudley = {password: 'makedowiththis', email: 'get_over_it@dude.bro', fname: 'Dudley',
  lname: 'Dudesmith', birthday: 7, birthmonth: 'July', birthyear: 1987, gender: 'Male'}
posh = {password: 'poshspice', email: 'iywbml@yggwmf.pop', fname: 'Posh',
  lname: 'Spice', birthday: 12, birthmonth: 'January', birthyear: 1985, gender: 'Female'}
math = {password: 'asymptotic', email: 'geo@metrics.length', fname: 'Math',
  lname: 'Teacher', birthday: 30, birthmonth: 'September', birthyear: 1975, gender: 'Male'}
dj = {password: 'feeblemind', email: 'dndiva@fungames.net', fname: 'DJ',
  lname: 'Paladin', birthday: 22, birthmonth: 'May', birthyear: 1980, gender: 'Female'}
reality = {password: 'continuum', email: 'fabric@timeandspace.rip', fname: 'Reality',
  lname: 'Bender', birthday: 29, birthmonth: 'February', birthyear: 1900, gender: 'Male'}
meerkat = {password: 'soybeansarsaparilla', email: 'healthy@living.well', fname: 'Meerkat',
  lname: 'Oswali', birthday: 11, birthmonth: 'June', birthyear: 1960, gender: 'Female'}


User.create!(test_user)
User.create!(demo_user)
User.create!(billy)
User.create!(adelaide)
User.create!(dudley)
User.create!(posh)
User.create!(math)
User.create!(dj)
User.create!(reality)
User.create!(meerkat)

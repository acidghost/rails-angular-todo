# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u01 = User.create! email: 'test01@example.com', password: '123456789'

Task.create! text: 'Something to do...', user: u01
Task.create! text: 'Other stuff that needs to be done!', user: u01
Task.create! text: 'This is done', done: true, user: u01

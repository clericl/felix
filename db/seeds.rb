# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do |idx|
    f_name = Faker::Creature::Cat.name
    l_name = Faker::Hipster.words(1)[0].capitalize
    username = Faker::Internet.username([f_name, l_name].join(" "))
    email = Faker::Internet.email(username)
    password = "catword"
    User.create!(username: username, email: email, f_name: f_name, l_name: l_name, password: password)
end

faker_text = [
    'Faker::Marketing.buzzwords',
    'Faker::Hipster.sentence',
    'Faker::Hacker.say_something_smart',
    'Faker::Movies::Ghostbusters.quote',
    'Faker::Movies::PrincessBride.quote',
    'meow',
    'meow("mrow")',
    'meow("hssss")',
]

def meow(string = "meow")
    (["meow"] * (1..20).to_a.sample).join(" ")
end

50.times do |idx|
    author_id = (1..10).to_a.sample
    text = eval(faker_text.sample)
    Post.create!(author_id: author_id, body: text)
end

500.times do |idx|
    liker_id = (1..10).to_a.sample
    post_id = (1..50).to_a.sample
    Like.create!(liker_id: liker_id, likeable_id: post_id, likeable_type: :Post)
end

30.times do |idx|
    user_id = (1..10).to_a.sample
    friend_id = (1..10).to_a.sample
    Friend.create(user_id: user_id, friend_id: friend_id)
end
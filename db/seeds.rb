# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
FriendRequest.destroy_all
Comment.destroy_all

ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('posts')
ApplicationRecord.connection.reset_pk_sequence!('friend_requests')
ApplicationRecord.connection.reset_pk_sequence!('comments')

User.create!(
    first_name: "Tony",
    last_name: "Tiger",
    birthday: Date.parse("Thu, 28 Jul 1966"),
    email: "tonytiger@test.com",
    gender: "m",
    password: "frostedflakes",
    default_img_url: "https://www.nydailynews.com/resizer/EfzByiVBnuJkjD_ip1WAJGDOQMU=/800x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/4HDSW6YT777BLGN7SBPHL7STMM.jpg",
    bio: "In my younger and more vulnerable years my father gave me some advice that I’ve been turning over in my mind ever since.",
    title: "Head Brand Manager",
    workplace: "Kelloggs Cereal Co."
)

User.create!(
    first_name: "Captain",
    last_name: "Crunch",
    birthday: Date.parse("Thu, 28 Jul 1966"),
    email: "captaincrunch@test.com",
    gender: "m",
    password: "napoleon",
    default_img_url: "http://296y67419hmo2gej4j232hyf-wpengine.netdna-ssl.com/wp-content/uploads/2013/06/captain-crunch-face.gif",
    bio: "Call me Ishmael.",
    title: "Captain",
    workplace: "the high seas",
    school: "Sailing School",
    hometown: "Napoli, Italy"
)

User.create!(
    first_name: "Toucan",
    last_name: "Sam",
    birthday: Date.parse("Thu, 28 Jul 1966"),
    email: "toucansam@test.com",
    gender: "m",
    password: "frootloops",
    default_img_url: "https://hobbydb-production.s3.amazonaws.com/processed_uploads/subject_photo/subject_photo/image/5814/1432171991-3-9861/Toucan_20Sam.jpg",
    bio: "It was a bright cold day in April, and the clocks were striking thirteen.",
    title: "Wildlife Preservationist",
    workplace: "Bronx Zoo",
    hometown: "Madagascar"
)

User.create!(
    first_name: "Trix",
    last_name: "Rabbit",
    birthday: Date.parse("Thu, 28 Jul 1966"),
    email: "trixrabbit@test.com",
    gender: "m",
    password: "trixytrix",
    default_img_url: "https://hobbydb-production.s3.amazonaws.com/processed_uploads/subject_photo/subject_photo/image/32714/1509406862-11122-4619/Trix_20Rabbit_large.jpg",
    bio: "True! --nervous --very, very dreadfully nervous I had been and am; but why will you say that I am mad?",
    title: "Jeffrey Dahmer Impersonator",
    workplace: "Times Square",
    current_city: "New York",
    hometown: "Derry, Maine"
)

User.create!(
    first_name: "Lucky",
    last_name: "Leprechaun",
    birthday: Date.parse("Thu, 28 Jul 1966"),
    email: "luckyleprechaun@test.com",
    gender: "m",
    password: "potofgold",
    default_img_url: "https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/lucky-the-leprechaun--lucky-charms-55.3.jpg",
    bio: "For weeks carts and caravans were coming from all over Middle-earth to bring provisions for the Grand Old Party, as Bilbo referred to it.",
    title: "Senior Consultant",
    workplace: "PricewaterhouseCoopers",
    current_city: "New York",
    hometown: "Boise, Idaho"
)

User.create!(
    first_name: "Buzz",
    last_name: "Bee",
    birthday: Date.parse("Thu, 28 Jul 1966"),
    email: "honeybuzz@test.com",
    gender: "m",
    password: "bzzzzz",
    default_img_url: "https://pbs.twimg.com/profile_images/1080916869568069632/JOC1JZIx.jpg",
    bio: "A squat grey building of only thirty-four stories. Over the main entrance the words, CENTRAL LONDON HATCHERY AND CONDITIONING CENTRE, and, in a shield, the World State's motto, COMMUNITY, IDENTITY, STABILITY.",
    title: "Erotica Writer",
    workplace: "Freelance",
    current_city: "New York",
    hometown: "New Delhi, India"
)

User.create!(
    first_name: "Alfred",
    last_name: "Chocula",
    birthday: Date.parse("Thu, 28 Jul 1966"),
    email: "countchocula@test.com",
    gender: "m",
    password: "chocolife",
    default_img_url: "http://img.timeinc.net/time/photoessays/2011/top10_creepiest_mascots/count_chocola.jpg",
    bio: "Buda-Pesth seems a wonderful place, from the glimpse which I got of it from the train and the little I could walk through the streets.",
    title: "Kindergarten Teacher",
    workplace: "P.S. 204",
    current_city: "New York",
    hometown: "Choculand, Transylvania"
)

User.create!(
    first_name: "Chip",
    last_name: "Wolf",
    birthday: Date.parse("Thu, 28 Jul 1966"),
    email: "chippywolf@test.com",
    gender: "m",
    password: "cookiecrisp",
    default_img_url: "https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/chip-the-wolf-cookie-crisp-40.6.jpg",
    bio: "Lolita, light of my life, fire of my loins. My sin, my soul.",
    title: "Salsa Instructor",
    workplace: "El Barrio Dance Studio",
    current_city: "New York",
    hometown: "Austin, Texas"
)


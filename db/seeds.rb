# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(
    first_name: "Tony",
    last_name: "Tiger",
    birthday: Date.parse("Thu, 28 Jul 1966"),
    email: "tonytiger@test.com",
    gender: "m",
    password: "frostedflakes",
    default_img_url: "https://www.nydailynews.com/resizer/EfzByiVBnuJkjD_ip1WAJGDOQMU=/800x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/4HDSW6YT777BLGN7SBPHL7STMM.jpg"
)

User.create!(
    first_name: "Captain",
    last_name: "Crunch",
    birthday: Date.parse("Thu, 28 Jul 1966"),
    email: "captaincrunch@test.com",
    gender: "m",
    password: "napoleon",
    default_img_url: "http://296y67419hmo2gej4j232hyf-wpengine.netdna-ssl.com/wp-content/uploads/2013/06/captain-crunch-face.gif"
)

User.create!(
    first_name: "Toucan",
    last_name: "Sam",
    birthday: Date.parse("Thu, 28 Jul 1966"),
    email: "toucansam@test.com",
    gender: "m",
    password: "frootloops",
    default_img_url: "https://hobbydb-production.s3.amazonaws.com/processed_uploads/subject_photo/subject_photo/image/5814/1432171991-3-9861/Toucan_20Sam.jpg"
)

User.create!(
    first_name: "Trix",
    last_name: "Rabbit",
    birthday: Date.parse("Thu, 28 Jul 1966"),
    email: "trixrabbit@test.com",
    gender: "m",
    password: "trixytrix",
    default_img_url: "https://hobbydb-production.s3.amazonaws.com/processed_uploads/subject_photo/subject_photo/image/32714/1509406862-11122-4619/Trix_20Rabbit_large.jpg"
)
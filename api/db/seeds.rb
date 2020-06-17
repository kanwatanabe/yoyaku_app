# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Facility.create(
    [
        {facility_name: "KKK病院",
        picture: open("#{Rails.root}/db/fixtures/img1.jpg"),
        content: "脳外科です"},
        {facility_name: "KKKクリニック",
        picture: open("#{Rails.root}/db/fixtures/img2.jpg"),
        content: "耳鼻科です"},
        {facility_name: "KKK診療所",
        picture: open("#{Rails.root}/db/fixtures/img3.jpg"),
        content: "神経内科です"},
        {facility_name: "KKK診療所",
        picture: open("#{Rails.root}/db/fixtures/img3.jpg"),
        content: "神経内科です"},
        {facility_name: "KKK病院",
        picture: open("#{Rails.root}/db/fixtures/img1.jpg"),
        content: "脳外科です"},
        {facility_name: "KKKクリニック",
        picture: open("#{Rails.root}/db/fixtures/img2.jpg"),
        content: "耳鼻科です"},
        {facility_name: "KKK診療所",
        picture: open("#{Rails.root}/db/fixtures/img3.jpg"),
        content: "神経内科です"},
        {facility_name: "KKK診療所",
        picture: open("#{Rails.root}/db/fixtures/img3.jpg"),
        content: "神経内科です"}
    ]
)
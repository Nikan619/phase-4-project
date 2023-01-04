# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
GameImage.destroy_all
User.destroy_all

GameImage.create(name:"CATAN", image:"https://target.scene7.com/is/image/Target/GUEST_4a6c6a4b-4279-4520-9c7d-2e5036b525a4?wid=633&hei=633&qlt=80&fmt=webp:")
GameImage.create(name:"MONOPOLY", image:"https://i5.walmartimages.com/asr/e9009e67-fbb0-4e96-83c5-5af0eeb13b28_1.f17117ff29f8aa4992cb93bad9205dc4.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF")
GameImage.create(name:"LIFE", image:"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/91FnnNUmEgL._AC_SX679_.jpg")
GameImage.create(name:"RISK", image:"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/91jsvpbPP3L.__AC_SX300_SY300_QL70_FMwebp_.jpg")
GameImage.create(name:"SORRY", image: "https://2.bp.blogspot.com/-NfpkXADjUxo/WkZ-B9b4-sI/AAAAAAAAbGI/Hr9syBXRsbgcSdm808H83u6AwBe0YIAAQCLcBGAs/s320/ef029d707cca2a520338acf2f564cbb8.jpg")



User.create(username:"Nikan",password:"123")
User.create(username:"Aidan",password:"456")
User.create(username:"Marco",password:"789")
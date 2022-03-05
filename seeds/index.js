const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 200; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            // macbook 13 author: '621efd0b623f08b7fd86da8d',
            // macbook 16 author: '621ce7b96e8087aeaf42c77e',
            author: '621efd0b623f08b7fd86da8d',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'sicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price: 1000,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            images: [
                {
                    url: 'https://cdn2.howtostartanllc.com/images/business-ideas/business-idea-images/Campground.jpg',
                    filename: 'YelpCamp/vrofo9tehohv0jpac3tq'
                },
                {
                    url: 'https://northeastohiofamilyfun.com/wp-content/uploads/2020/05/Campgrounds-in-Ohio.jpg',
                    filename: 'YelpCamp/vrofo9tehohv0jpac3ta'
                }
            ]

        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})
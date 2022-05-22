const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Pastpaper = require('../models/pastpaper');

mongoose.connect('mongodb://localhost:27017/dse00', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async() => {
    await Pastpaper.deleteMany({});
    for (let i = 0; i < 1; i++) {
        const pastpaper = new Pastpaper({
            title: '中文',
            years: [
                { year: 1991, url: 'http://dse00.com' }, { year: 1992, url: 'http://dse00.com' }
            ]
        })
        await pastpaper.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})
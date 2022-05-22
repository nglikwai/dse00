const mongoose = require('mongoose');
const pastpapers = require('./subjects');
const { places, descriptors } = require('./seedHelpers');
const Pastpaper = require('../models/pastpaper');


mongoose.connect('mongodb+srv://nglikwai:dse00com@cluster0.hwgq8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
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
    for (let i = 0; i < pastpapers.length; i++) {
        const pastpaper = new Pastpaper(pastpapers[i])
        console.log(pastpaper)
        await pastpaper.save();
    }
}


seedDB().then(() => {
    mongoose.connection.close();
})
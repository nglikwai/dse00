const mongoose = require("mongoose");
const jupases = [
    {
        title: 'Bachelor of Science in Computational Finance and Financial Technology',
        year: 2021,
        code: 1000,
        cutoffs: [[4, 4, 5, 3, 6, 5, 4], [3, 4, 5, 4, 6, 5]]
    },
    {
        title: 'Bachelor of Business Administration in Global Business',
        year: 2021,
        code: 1001,
        cutoffs: [[4, 4, 5, 5, 5, 4, 4], [6, 3, 4, 4, 4, 4, 4]]
    },

    {
        title: 'Bachelor of Business Administration in Accountancy',
        year: 2021,
        code: 1002,
        cutoffs: [[3, 3, 5, 4, 5, 4, 3], [4, 3, 5, 3, 4, 4]]
    },

    {
        title: 'Bachelor of Business Administration in Management',
        year: 2021,
        code: 1005,
        cutoffs: [[4, 4, 4, 4, 4, 4, 3], [3, 4, 4, 4, 5, 4, 3]]
    },

    {
        title: 'Bachelor of Business Administration in Marketing',
        year: 2021,
        code: 1007,
        cutoffs: [[4, 4, 4, 4, 4, 4, 4], [5, 3, 3, 5, 4, 3]]
    },
];



const Jupas = require("../models/jupas");

mongoose.connect(
    "mongodb+srv://nglikwai:dse00com@cluster0.hwgq8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async () => {
    await Jupas.deleteMany({});
    for (let i = 0; i < jupases.length; i++) {
        const jupas = new Jupas(jupases[i]);
        console.log(jupas);
        await jupas.save();
    }
};

seedDB().then(() => {
    mongoose.connection.close();
});

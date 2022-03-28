const mongoose = require("mongoose");
const jupases = [
    {
        year: 2021,
        code: 1000,
        cutoffs: {
            Chinese: 4,
            English: 4,
            Maths: 5,
            LS: 3,
            E1: 6,
            E2: 5,
        },
    },
    {
        year: 2021,
        code: 1000,
        cutoffs: {
            Chinese: 3,
            English: 4,
            Maths: 5,
            LS: 4,
            E1: 6,
            E2: 5,
        },
    },
    {
        year: 2021,
        code: 1001,
        cutoffs: {
            Chinese: 4,
            English: 4,
            Maths: 5,
            LS: 5,
            E1: 5,
            E2: 4,
        },
    },
    {
        year: 2021,
        code: 1001,
        cutoffs: {
            Chinese: 6,
            English: 3,
            Maths: 4,
            LS: 4,
            E1: 4,
            E2: 4,
        },
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

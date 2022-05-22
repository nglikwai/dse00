const mongoose = require('mongoose');

const cases = [
    {
        name: "黎子頌",
        subject: "中文",
        price: 180,
        form: 5,
        region: "大埔",
        building: "大埔中心",
        case: 1,
        hour: 2,
        lession: 1,
        createdAt: new Date(),
        gender: "M"
    },
    {
        name: "李家而",
        subject: "化學",
        price: 160,
        form: 4,
        region: "上水",
        building: "上水中心",
        case: 2,
        hour: 1.5,
        lession: 2,
        createdAt: new Date(),
        gender: "F"
    },
    {
        name: "陳小明",
        subject: "生物",
        price: 180,
        form: 6,
        region: "粉嶺",
        building: "清河邨",
        case: 3,
        hour: 2,
        lession: 1,
        createdAt: new Date(),
        gender: "M"
    },
    {
        name: "王一心",
        subject: "中文",
        price: 140,
        form: 4,
        region: "火炭",
        building: "火炭邨",
        case: 4,
        hour: 2,
        lession: 1,
        createdAt: new Date(),
        gender: "F"
    },
    {
        name: "黃加偉",
        subject: "中文",
        price: 180,
        form: 5,
        region: "大埔",
        building: "大埔中心",
        case: 5,
        hour: 2,
        lession: 1,
        createdAt: new Date(),
        gender: "M"
    },
    {
        name: "林子一",
        subject: "中文",
        price: 180,
        form: 5,
        region: "九龍塘",
        building: "又一城花園",
        case: 6,
        hour: 2,
        lession: 1,
        createdAt: new Date(),
        gender: "M"
    },
    {
        name: "吳力力",
        subject: "中文",
        price: 180,
        form: 5,
        region: "荃灣",
        building: "荃灣中心",
        case: 7,
        hour: 2,
        lession: 1,
        createdAt: new Date(),
        gender: "M"
    },
];

const Case = require("../models/case");;

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
    await Case.deleteMany({});
    for (let i = 0; i < cases.length; i++) {
        const caseUnit = new Case(cases[i]);
        console.log(caseUnit);
        await caseUnit.save();
    }
};

seedDB().then(() => {
    mongoose.connection.close();
});

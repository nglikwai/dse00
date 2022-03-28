const mongoose = require("mongoose");
const jupases = [
  {
    title:
      "Bachelor of Science in Computational Finance and Financial Technology",
    year: 2021,
    code: 1000,
    cutoffs: [
      [4, 4, 5, 3, 6, 5, 4],
      [3, 4, 5, 4, 6, 5],
    ],
  },
  {
    title: "Bachelor of Business Administration in Global Business",
    year: 2021,
    code: 1001,
    cutoffs: [
      [4, 4, 5, 5, 5, 4, 4],
      [6, 3, 4, 4, 4, 4, 4],
    ],
  },

  {
    title: "Bachelor of Business Administration in Accountancy",
    year: 2021,
    code: 1002,
    cutoffs: [
      [3, 3, 5, 4, 5, 4, 3],
      [4, 3, 5, 3, 4, 4],
    ],
  },

  {
    title: "Bachelor of Business Administration in Management",
    year: 2021,
    code: 1005,
    cutoffs: [
      [4, 4, 4, 4, 4, 4, 3],
      [3, 4, 4, 4, 5, 4, 3],
    ],
  },

  {
    title: "Bachelor of Business Administration in Marketing",
    year: 2021,
    code: 1007,
    cutoffs: [
      [4, 4, 4, 4, 4, 4, 4],
      [5, 3, 3, 5, 4, 3],
    ],
  },
  {
    title: "Bachelor of Arts (Hons)",
    year: 2021,
    code: 2020,
    cutoffs: [
      [6, 3, 3, 4, 4, 4],
      [5, 3, 3, 5, 5, 4],
    ],
  },
  {
    title: "Bachelor of Arts (Hons) in Religion, Philosophy and Ethics",
    year: 2021,
    code: 2025,
    cutoffs: [
      [4, 4, 2, 4, 5, 4],
      [5, 4, 4, 3, 4, 3],
    ],
  },
  {
    title:
      "Bachelor of Business Administration (Hons) – Accounting Concentration",
    year: 2021,
    code: 2110,
    cutoffs: [
      [4, 4, 3, 4, 4, 3],
      [4, 3, 4, 3, 4, 4],
    ],
  },
  {
    title: "Bachelor of Business Administration (Hons)",
    year: 2021,
    code: 2120,
    cutoffs: [
      [4, 3, 4, 3, 4, 4],
      [4, 3, 3, 4, 5, 3],
    ],
  },
  {
    title:
      "Bachelor of Communication in Film (Animation and Media Arts Concentration)",
    year: 2021,
    code: 2320,
    cutoffs: [
      [4, 4, 6, 4, 5, 4],
      [5, 4, 5, 4, 4, 4],
    ],
  },
  {
    title:
      "Bachelor of Communication (Hons) in Film (Film and Television Concentration)",
    year: 2021,
    code: 2330,
    cutoffs: [
      [4, 4, 6, 3, 4, 4],
      [3, 4, 5, 5, 4, 4],
    ],
  },
  {
    title: "Bachelor of Fine Arts (Hons) in Acting for Global Screen",
    year: 2021,
    code: 2340,
    cutoffs: [
      [4, 3, 3, 4, 4, 4],
      [4, 4, 4, 4, 3, 2],
    ],
  },
  {
    title:
      "Bachelor of Chinese Medicine and Bachelor of Science (Hons) in Biomedical Science",
    year: 2021,
    code: 2410,
    cutoffs: [
      [5, 4, 5, 5, 6, 5],
      [4, 4, 5, 4, 5, 5],
    ],
  },
  {
    title: "Bachelor Pharmacy (Hons) in Chinese Medicine",
    year: 2021,
    code: 2420,
    cutoffs: [
      [4, 4, 4, 4, 5, 4],
      [4, 3, 4, 4, 4, 4],
    ],
  },
  {
    title: "Bachelor of Science (Hons)",
    year: 2021,
    code: 2510,
    cutoffs: [
      [4, 4, 3, 3, 4, 3],
      [3, 3, 4, 4, 3, 3],
    ],
  },
  {
    title:
      "Bachelor of Arts (Hons)/ Bachelor of Social Sciences (Hons) (Geography/ Government & International Studies/ History/ Sociology)",
    year: 2021,
    code: 2610,
    cutoffs: [
      [5, 3, 3, 5, 5, 4],
      [4, 4, 2, 4, 5, 4],
    ],
  },
  {
    title:
      "Bachelor of Arts (Hons) in Physical Education and Recreation Management",
    year: 2021,
    code: 2620,
    cutoffs: [
      [4, 4, 4, 5, 5, 4],
      [4, 4, 5, 4, 4, 4],
    ],
  },
  {
    title: " Bachelor of Social Work (Hons)",
    year: 2021,
    code: 2660,
    cutoffs: [
      [6, 4, 3, 4, 4, 4],
      [6, 3, 2, 5, 5, 4],
    ],
  },
  {
    title: "Bachelor of Arts (Hons) in Visual Arts",
    year: 2021,
    code: 2810,
    cutoffs: [
      [6, 4, 4, 4, 3, 3],
      [4, 5, 4, 4, 3, 3],
    ],
  },
  {
    title:
      "Bachelor of Science (Hons) in Business Computing and Data Analytics",
    year: 2021,
    code: 2910,
    cutoffs: [
      [4, 3, 4, 3, 4, 4],
      [4, 3, 5, 3, 3, 3],
    ],
  },
  {
    title:
      "Department of Economics and Finance (options: BBA Business Economics, BBA Finance)",
    year: 2021,
    code: 1012,
    cutoffs: [
      [4, 4, 5, 4, 4, 4],
      [4, 3, 5, 4, 4, 4],
    ],
  },
  {
    title: "Bachelor of Business Administration in Business Economics",
    year: 2021,
    code: 1013,
    cutoffs: [
      [4, 4, 4, 4, 4, 3],
      [4, 3, 5, 3, 4, 4],
    ],
  },
  {
    title: "Bachelor of Business Administration in Finance",
    year: 2021,
    code: 1014,
    cutoffs: [
      [5, 3, 4, 3, 4, 4],
      [4, 4, 3, 5, 4, 3],
    ],
  },
  {
    title:
      "Department of Information Systems (options: BBA Global Business Systems Management, BBA Information Management)",
    year: 2021,
    code: 1017,
    cutoffs: [
      [3, 3, 4, 4, 6, 4],
      [4, 3, 4, 3, 5, 4],
    ],
  },
  {
    title:
      "Bachelor of Business Administration in Global Business Systems Management",
    year: 2021,
    code: 1018,
    cutoffs: [
      [4, 4, 4, 5, 4, 4],
      [4, 4, 4, 4, 4, 4],
    ],
  },
  {
    title: "Bachelor of Business Administration in Information Management",
    year: 2021,
    code: 1019,
    cutoffs: [
      [3, 4, 3, 6, 4, 4],
      [4, 3, 5, 3, 4, 4],
    ],
  },
  {
    title:
      "Department of Management Sciences (options: BBA Business Analysis, BBA Business Operations Management)",
    year: 2021,
    code: 1025,
    cutoffs: [
      [3, 4, 4, 4, 5, 4],
      [3, 4, 4, 4, 4, 4],
    ],
  },
  {
    title: "Bachelor of Business Administration in Business Analysis",
    year: 2021,
    code: 1026,
    cutoffs: [
      [3, 4, 5, 4, 4, 3],
      [3, 4, 4, 4, 4, 4],
    ],
  },
  {
    title:
      "Bachelor of Business Administration in Business Operations Management",
    year: 2021,
    code: 1027,
    cutoffs: [
      [3, 4, 5, 3, 4, 4],
      [4, 4, 3, 4, 4, 4],
    ],
  },
  {
    title:
      "School of Creative Media (options: BA Creative Media, BSc Creative Media, BAS New Media)",
    year: 2021,
    code: 1041,
    cutoffs: [
      [4, 4, 4, 4, 4, 4],
      [5, 5, 3, 3, 3, 3],
    ],
  },
  {
    title: "Bachelor of Arts in Creative Media",
    year: 2021,
    code: 1042,
    cutoffs: [
      [4, 4, 4, 4, 5, 4],
      [4, 3, 5, 4, 4, 4],
    ],
  },
  {
    title: "Bachelor of Science in Creative Media",
    year: 2021,
    code: 1043,
    cutoffs: [
      [4, 3, 5, 3, 4, 3],
      [3, 4, 4, 4, 4, 4],
    ],
  },
  {
    title: "Bachelor of Arts and Science in New Media",
    year: 2021,
    code: 1044,
    cutoffs: [
      [3, 3, 4, 4, 4, 4],
      [4, 3, 4, 3, 4, 4],
    ],
  },
  {
    title:
      "School of Energy and Environment (options: BEng Energy Science and Engineering, BEng Environmental Science and Engineering)",
    year: 2021,
    code: 1051,
    cutoffs: [
      [4, 3, 5, 3, 3, 3],
      [3, 3, 4, 3, 4, 3],
    ],
  },
  {
    title: "Bachelor of Laws",
    year: 2021,
    code: 1061,
    cutoffs: [
      [6, 5, 3, 4, 4, 4],
      [5, 4, 4, 4, 4, 4],
    ],
  },
  {
    title:
      "School of Data Science (options: BSc Data Science, BSc Data and Systems Engineering)",
    year: 2021,
    code: 1071,
    cutoffs: [
      [4, 4, 5, 4, 4, 4],
      [3, 3, 5, 3, 5, 4],
    ],
  },
  {
    title: "Bachelor of Science in Data Science",
    year: 2021,
    code: 1072,
    cutoffs: [
      [4, 3, 4, 3, 5, 5],
      [3, 4, 4, 4, 4, 3],
    ],
  },
  {
    title: "Bachelor of Science in Data and Systems Engineering",
    year: 2021,
    code: 1073,
    cutoffs: [
      [4, 3, 5, 3, 3, 3],
      [3, 3, 4, 3, 4, 3],
    ],
  },
  {
    title: "Bachelor of Science in Data and Systems Engineering",
    year: 2021,
    code: 1074,
    cutoffs: [
      [4, 3, 5, 3, 3, 3],
      [3, 3, 4, 3, 4, 3],
    ],
  },
  {
    title: "Bachelor of Social Sciences in Asian and International Studies",
    year: 2021,
    code: 1102,
    cutoffs: [
      [3, 3, 4, 5, 4, 4],
      [3, 4, 3, 4, 4, 4],
    ],
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

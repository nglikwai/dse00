const Tutor = require('../models/tutor');

module.exports.renderTutors = async (req, res) => {
    const tutors = await Tutor.find({});
    res.json(tutors);
}

module.exports.renderTutor = async (req, res) => {
    const tutor = await Tutor.findById(req.params.id);
    res.json(tutor);
}

const Jupas = require('../models/jupas');



module.exports.searchCode = async (req, res) => {
    if (req.query.code) {
        if (!(req.query.code > 0)) {
            req.flash('error', '只輸入 4 位數字 code');
            res.redirect('/jupas/code')
        }
        const code = req.query.code;
        console.log(code);
        const jupases = await Jupas.find({ code })
        return res.render('jupas/index', { jupases })
    }
    const jupases = await Jupas.find({})
    res.render('jupas/index', { jupases })
}
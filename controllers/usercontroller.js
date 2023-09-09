const Banner = require('../models/homebanner')


module.exports = {
    userHome: async (req, res) => {
        try {
            const banner = await Banner.find()
            res.render('user/home', { banner });
        } catch (err) {
            console.log(err);
        }
    },




}
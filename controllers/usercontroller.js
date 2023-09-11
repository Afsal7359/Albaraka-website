const Banner = require('../models/homebanner');
const offproduct = require('../models/offproductmodel');


module.exports = {
    userHome: async (req, res) => {
        try {
            const banner = await Banner.find()
            const offproducts=await offproduct.find()
            res.render('user/home', { banner,offproducts});
        } catch (err) {
            console.log(err);
        }
    },




}
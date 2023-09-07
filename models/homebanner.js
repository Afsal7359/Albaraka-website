const mongoose = require('mongoose');

const homebannerSchema = new mongoose.Schema({
    bannerhead: {
        type: String,
        required: true,
        trim: true
    },
    bannerimage: {
        type: String,
        required: true
    }
});

const Banner = mongoose.model('homebanner', homebannerSchema);
module.exports = Banner;

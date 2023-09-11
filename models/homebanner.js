const mongoose = require('mongoose');

const homebannerSchema = new mongoose.Schema({
    bannerhead: {
        type: String,
        required:[true,'Please add a heading'],
        trim: true
    },
    bannerimage: {
        type: String,
        required: true
    }
});

const   Banner = mongoose.model('homebanner', homebannerSchema);
module.exports = Banner;

const mongoose = require('mongoose');

const giftingSchema = new mongoose.Schema({
    giftprohead: {
        type: String,
        required: true,
        trim: true
    },
    giftprodescription: {
        type: String,
        required: true,
        trim: true
    },
    giftproimage: {
        type: String,
        required: true
    }
});

const gifting = mongoose.model('gifting', giftingSchema);
module.exports = gifting;

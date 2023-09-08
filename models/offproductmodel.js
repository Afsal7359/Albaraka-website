const mongoose = require('mongoose');

const homeoffproductSchema = new mongoose.Schema({
    offprohead: {
        type: String,
        required: true,
        trim: true
    },
    offprodescription: {
        type: String,
        required: true,
        trim: true
    },
    offproimage: {
        type: String,
        required: true
    }
});

const offproduct = mongoose.model('offproduct', homeoffproductSchema);
module.exports = offproduct;

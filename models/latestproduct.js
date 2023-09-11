const mongoose = require('mongoose');

const latestproductSchema = new mongoose.Schema({
    latprohead:{
        type : String, required : true, trim : true
    },
    latprodescription:{
        type:String, required:true, trim:true
    },
    latproimage:{
        type:String,  trim:true
    }
});


const latestproduct = mongoose.model('latest product',latestproductSchema);
module.exports=latestproduct;
const mongoose = require('mongoose');



const sweetSchema = new mongoose.Schema({

 
    sweetproimage:{
        type:String,
        required:true
    },
    sweetproname:{
        type : String ,
        required:true,
        trim:true
    }
});
const sweetproduct = mongoose.model('sweet gallery',sweetSchema);
module.exports=sweetproduct;



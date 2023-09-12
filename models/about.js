const mongoose = require('mongoose');



const aboutSchema = new mongoose.Schema({

 
    aboutimage:{
        type:String,
        required:true
    }
    
});
const about = mongoose.model('about',aboutSchema);
module.exports=about;



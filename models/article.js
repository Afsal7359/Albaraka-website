const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    articledescription:{
        type:String,
        required:[true,'Please add a description'],
        trim:true
    },
    articledate:{
        type:String,
        required:true,
        trim:true
    },
    articleimage:{
        type: String ,
        required :true
    }
});
const article = mongoose.model("Article", articleSchema);
module.exports=article;
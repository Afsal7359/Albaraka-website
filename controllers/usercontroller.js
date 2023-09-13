const about = require('../models/about');
const article = require('../models/article');
const gifting = require('../models/gifting');
const Banner = require('../models/homebanner');
const offproduct = require('../models/offproductmodel');
const sweetproduct = require('../models/sweet');


module.exports = {
    userHome: async (req, res) => {
        try {
            const banner = await Banner.find()
            const offproducts=await offproduct.find()
            const articles=await article.find()
            const giftings=await gifting.find()
            const abouts = await about.find()
            res.render('user/home', { banner,offproducts,articles,giftings,abouts});
         
        } catch (err) {
            console.log(err);
        }
    },

    userabout: async(req, res)=>{
        try{
        const abouts= await about.find()
        res.render('user/about',{abouts})
        }catch (err){
            console.log(err);
        }

    },

    usergallery: async(req,res)=>{
        try{
            const gallerys= await sweetproduct.find()
            
            res.render('user/gallery',{gallerys});
        }catch(err){
            console.log(err);
        }
    },

    usergifting: async(req,res)=>{
        try{
            const giftings= await gifting.find()
            res.render('user/gifting',{giftings});
        }catch(err){
            console.log(err)
        }
    },
    userblog: async(req,res)=>{
        try{
            const blogs=await article.find()
            res.render('user/blog',{blogs});
        }catch(err){
            console.log(err);
        }
    }



}
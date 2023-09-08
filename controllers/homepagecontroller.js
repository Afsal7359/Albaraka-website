const cloudinary = require('../util/cloudinary')
const Banner = require('../models/homebanner')
const offproduct = require('../models/offproductmodel');


module.exports ={



     
// homebanner : async (req, res) => {
//     try {
        
//          res.render('admin/home/banner', { layout: "adminlayout"});
     
           
//         } catch (err) {
//             console.log(err);
//         }
//     },


Addhomebanner: async (req, res) => {
    try{
        
       
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageurl = result.url
          
            const { bannerhead } = req.body
    

            await Banner.create({bannerhead,bannerimage:imageurl})
            console.log("Home Banner  Added Sucessfully");
            res.redirect('/admin/homebanner'); 

        }catch(err){
          console.log(err);
        }
    },


    gethomebanner: async (req, res) => {
        try {
            
            const banner = await Banner.find()
           res.render('admin/home/banner', { layout: "adminlayout",banner})
           
        } catch (err) {
            console.log(err);
        }
    },

edithomebanner: async (req, res) => {
    try {
        const { id } = req.params;
        const { bannerhead } = req.body;

        let imageurl = null;

        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            imageurl = result.url;
        }

        const updatedFields = {};

        if (bannerhead) {
            updatedFields.bannerhead = bannerhead;
        }

        if (imageurl) {
            updatedFields.bannerimage = imageurl;
        }

        const updatedBanner = await Banner.findOneAndUpdate(
            { _id: id },
            { $set: updatedFields },
            { new: true }
        );

        console.log("Home Banner Successfully updated");
        res.redirect('/admin/homebanner');
    } catch (err) {
        console.log(err);
    }
},
Deletehomebanner: async (req, res) => {
    try {
        const { id } = req.params
        await Banner.findByIdAndDelete({ _id: id });
        console.log("Home Banner Deleted Sucessfully");
        res.redirect('/admin/homebanner')
    } catch (err) {
        console.log(err);
    }
},


Addoffproduct: async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        const imageurl = result.url;
        
        const { offprohead, offprodescription } = req.body;

        await offproduct.create({ offprohead, offprodescription, offproimage: imageurl });
        console.log("Offer Product Added Successfully");
        res.redirect('/admin/offproduct');
    } catch (err) {
        console.error(err);
    }
},




getoffproduct: async (req, res) => {
    try {
        
        // const banner = await offproduct.find()
       res.render('admin/home/productsoffer', { layout: "adminlayout"})
       
    } catch (err) {
        console.log(err);
    }
},




};
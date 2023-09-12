const gifting = require('../models/gifting');
const sweetproduct = require('../models/sweet');
const cloudinary = require('../util/cloudinary')


module.exports ={

    Getgifting: async (req, res) => {
        try {
            const giftingproducts = await gifting.find()
                res.render('admin/gifting/gifting', { layout: "adminlayout", giftingproducts});
                
        } catch (err) {
            console.log(err);
        }
    },
//
Addgifting: async (req, res) => {
    try{
        
       
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageurl = result.url
            const { giftprohead,giftprodescription } = req.body
            
            await gifting.create({giftprohead,giftprodescription,giftproimage:imageurl})
            console.log("gifting   Added Sucessfully");
            res.redirect('/admin/gifting'); 

        }catch(err){
          console.log(err);
        }
    },
    Editgifting: async (req, res) => {
        try {
            const { id } = req.params;
            const { giftprohead,giftprodescription } = req.body;
    
            let imageurl = null;
    
            if (req.file) {
                const result = await cloudinary.uploader.upload(req.file.path);
                imageurl = result.url;
            }
    
            const updatedFields = {};
    
            if (giftprohead) {
                updatedFields.giftprohead = giftprohead;
            }
            if (giftprodescription) {
                updatedFields.giftprodescription = giftprodescription;
            }
    
            if (imageurl) {
                updatedFields.giftproimage = imageurl;
            }
    
            const updatedgifting = await gifting.findOneAndUpdate(
                { _id: id },
                { $set: updatedFields },
                { new: true }
            );
    
            console.log("gifting Successfully updated");
            res.redirect('/admin/gifting');
        } catch (err) {
            console.log(err);
        }
    },
    Deletegifting: async (req, res) => {
        try {
            const { id } = req.params
            await gifting.findByIdAndDelete({ _id: id });
            console.log("gifting Deleted Sucessfully");
            res.redirect('/admin/gifting')
        } catch (err) {
            console.log(err);
        }
    },
}
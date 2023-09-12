const about = require("../models/about");

const cloudinary = require('../util/cloudinary')


module.exports={
  
    
    GetAbout: async (req, res) => {
        try {
            const abouts = await about.find()
                res.render('admin/about/about', { layout: "adminlayout",abouts });
                
        } catch (err) {
            console.log(err);
            // Handle the error appropriately, such as sending an error response to the client
        }
    },
//
AddAbout: async (req, res) => {
    try{
        
       
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageurl = result.url
          
            
            await about.create({aboutimage:imageurl})
            console.log("about page image   Added Sucessfully");
            res.redirect('/admin/about'); 

        }catch(err){
          console.log(err);
        }
    },
    EditAbout: async (req, res) => {
        try {
            const { id } = req.params;
    
            let imageurl = null;
    
            if (req.file) {
                const result = await cloudinary.uploader.upload(req.file.path);
                imageurl = result.url;
            }
    
            const updatedFields = {};
    
           
            if (imageurl) {
                updatedFields.aboutimage = imageurl;
            }
    
            const updatedAbout = await about.findOneAndUpdate(
                { _id: id },
                { $set: updatedFields },
                { new: true }
            );
    
            console.log("About image Successfully updated");
            res.redirect('/admin/about');
        } catch (err) {
            console.log(err);
        }
    },
    DeleteAbout: async (req, res) => {
        try {
            const { id } = req.params
            await about.findByIdAndDelete({ _id: id });
            console.log("About image Deleted Sucessfully");
            res.redirect('/admin/about')
        } catch (err) {
            console.log(err);
        }
    },

}
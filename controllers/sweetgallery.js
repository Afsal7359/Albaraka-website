const sweetproduct = require('../models/sweet');
const cloudinary = require('../util/cloudinary')


module.exports ={

    Getsweetproduct: async (req, res) => {
        try {
            const sweetproducts = await sweetproduct.find()
                res.render('admin/sweetgallery/sweetgallery', { layout: "adminlayout",sweetproducts });
                
        } catch (err) {
            console.log(err);
        }
    },
//
Addsweetproduct: async (req, res) => {
    try{
        
       
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageurl = result.url
            const { sweetproname } = req.body
            
            await sweetproduct.create({sweetproname,sweetproimage:imageurl})
            console.log("about page image   Added Sucessfully");
            res.redirect('/admin/sweetgallery'); 

        }catch(err){
          console.log(err);
        }
    },
    Editsweetproduct: async (req, res) => {
        try {
            const { id } = req.params;
            const { sweetproname } = req.body;
    
            let imageurl = null;
    
            if (req.file) {
                const result = await cloudinary.uploader.upload(req.file.path);
                imageurl = result.url;
            }
    
            const updatedFields = {};
    
            if (sweetproname) {
                updatedFields.sweetproname = sweetproname;
            }
    
            if (imageurl) {
                updatedFields.sweetproimage = imageurl;
            }
    
            const updatedsweetproduct = await sweetproduct.findOneAndUpdate(
                { _id: id },
                { $set: updatedFields },
                { new: true }
            );
    
            console.log("sweet product Successfully updated");
            res.redirect('/admin/sweetgallery');
        } catch (err) {
            console.log(err);
        }
    },
    Deletesweetproduct: async (req, res) => {
        try {
            const { id } = req.params
            await sweetproduct.findByIdAndDelete({ _id: id });
            console.log("sweet product Deleted Sucessfully");
            res.redirect('/admin/sweetgallery')
        } catch (err) {
            console.log(err);
        }
    },
}
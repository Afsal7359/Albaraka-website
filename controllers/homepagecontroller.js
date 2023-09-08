const cloudinary = require('../util/cloudinary')
const Banner = require('../models/homebanner')
const offproduct = require('../models/offproductmodel')


module.exports ={



     
// homebanner : async (req, res) => {
//     try {
        
//          res.render('admin/home/banner', { layout: "adminlayout" });
     
           
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
            res.redirect('/admin/bannerhome')
        }catch(err){
          console.log(err);
        }
    },


    getbanner: async (req, res) => {
        try {
            
            const banner = await Banner.find()
            console.log(banner,"hello banner");
            res.render('admin/home/banner', { layout: "adminlayout", banner })
           
        } catch (err) {
            console.log(err);
        }
    },


    editbanner:async(req,res)=>{
        try {
        

            const { id } = req.params;
            const { bannerhead } = req.body;

         
            const result = await cloudinary.uploader.upload(req.file.path);
         
            const imageurl = result.url;
        
    
            const updatedBanner = await Banner.findOneAndUpdate(
                { _id: id }, // Match the document by _id
                { bannerhead: bannerhead, bannerimage: imageurl }, // Set the new values for bannerhead and bannerimage
                { new: true } // Return the updated document
              );
           console.log("sucessfully updated");
            res.redirect('/admin/banner');
        } catch (err) {
            console.log(err);
        }
        
    }


    // Addhomebanner: async (req, res) => {
    //     try{
    //         console.log("haaaaaai");
          
    //         console.log(req.file.path);
           
    //             const result = await cloudinary.uploader.upload(req.file.path);
    //             const imageurl = result.url
    //             console.log(imageurl);
    //             const { bannerhead } = req.body
    //             console.log(req.body);
    
    //             await offproduct.create({bannerhead,bannerimage:imageurl})
    //             res.redirect('/admin/bannerhome')
    //         }catch(err){
    //           console.log(err);
    //         }
    //     },
    

    


// getoffproduct: async (req, res) => {
//     try {
        
//         const offproduct = await offproduct.findOne()
//         console.log(offproduct,"hello offproduct");
//         res.render('admin/home/products', { layout: "adminlayout", offproduct })
       
//     } catch (err) {
//         console.log(err);
//     }
// },

};
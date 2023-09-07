const cloudinary = require('../util/cloudinary')
const Banner = require('../models/homebanner')


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
        console.log("haaaaaai");
      
        console.log(req.file.path);
       
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageurl = result.url
            console.log(imageurl);
            const { bannerhead } = req.body
            console.log(req.body);

            await Banner.create({bannerhead,bannerimage:imageurl})
            res.redirect('/admin/bannerhome')
        }catch(err){
          console.log(err);
        }
    },


    getbanner: async (req, res) => {
        try {
            
            const banner = await Banner.findOne()
            console.log(banner,"hello banner");
            res.render('admin/home/banner', { layout: "adminlayout", banner })
           
        } catch (err) {
            console.log(err);
        }
    },

    editbanner: async (req, res) => {
        try {
            const { id } = req.params
            const { title, description } = req.body
            await Banner.findByIdAndUpdate(
                { _id: id },
                { title: title, description: description }, // No need to destructure the description parameter
                { new: true }
            );
            res.redirect('/admin/form')
        } catch (err) {
            console.log(err);
        }
    },
    editbannerimage:async(req,res)=>{
        try {
            const { id } = req.params;
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageurl = result.url;
        
            // Update only the image field
            await Banner.findByIdAndUpdate(
                { _id: id },
                { image: imageurl }, // Update only the image field
                { new: true }
            );
            
            res.redirect('/admin/home/banner');
        } catch (err) {
            console.log(err);
        }
        
    }
};

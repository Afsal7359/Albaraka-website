const cloudinary = require('../util/cloudinary')
const Banner = require('../models/homebanner')
const offproduct = require('../models/offproductmodel');
const latestproduct = require('../models/latestproduct');
const article = require('../models/article');




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

getoffproduct: async (req, res) => {
    try {
        
        const offproducts=await offproduct.find()
       res.render('admin/home/productsoffer', { layout: "adminlayout",offproducts})
       
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






editoffproduct : async (req, res) => {
    try {
        console.log(req.body,"hhhhrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
        const { id } = req.params;
        const { offprohead, offprodescription } = req.body;

        let imageurl = null;

        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            imageurl = result.url;
        }

        const updatedFields = {};

        if (offprohead) {
            updatedFields.offprohead = offprohead;
        }
        if (offprodescription) {
            updatedFields.offprodescription = offprodescription;
        }

        if (imageurl) {
            updatedFields.offproimage = imageurl;
        }

        const updatedoffproduct = await offproduct.findOneAndUpdate(
            { _id: id },
            { $set: updatedFields },
            { new: true }
        );

        if (updatedoffproduct) {
            console.log("Home offer product successfully updated");
            return res.redirect('/admin/offproduct');
        } else {
            console.log("Home offer product not found");
            return res.status(404).send("Product not found"); // You can customize the error response as needed.
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error"); // Handle errors appropriately
    }
},

Deleteoffproduct: async (req, res) => {
    try {
        const { id } = req.params
        await offproduct.findByIdAndDelete({ _id: id });
        console.log("Home offer product Deleted Sucessfully");
        res.redirect('/admin/offproduct')
    } catch (err) {
        console.log(err);
    }
},

Addlatestproduct: async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        const imageurl = result.url;
        
        const { latprohead,latprodescription } = req.body;

        await latestproduct.create({ latprohead, latprodescription, latproimage: imageurl });
        console.log("latest Product Added Successfully");
        res.redirect('/admin/latestproduct');
    } catch (err) {
        console.error(err);
    }
},
getlatestproduct: async (req, res) => {
    try {
        
        const latestproducts=await latestproduct.find()
       res.render('admin/home/latestproduct', { layout: "adminlayout",latestproducts})
       
    } catch (err) {
        console.log(err);
    }
},
editlatestproduct : async (req, res) => {
    try {
        const { id } = req.params;
        const { latprohead, latprodescription } = req.body;

        let imageurl = null;

        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            imageurl = result.url;
        }

        const updatedFields = {};

        if (latprohead) {
            updatedFields.latprohead = latprohead;
        }
        if (latprodescription) {
            updatedFields.latprodescription = latprodescription;
        }

        if (imageurl) {
            updatedFields.latproimage = imageurl;
        }

        const updatedlatestproduct = await latestproduct.findOneAndUpdate(
            { _id: id },
            { $set: updatedFields },
            { new: true }
        );


        console.log("latest product Successfully updated");
        res.redirect('/admin/latestproduct');
    } catch (err) {
        console.log(err);
    }
},
Deletelatestproduct: async (req, res) => {
    try {
        const { id } = req.params
        await latestproduct.findByIdAndDelete({ _id: id });
        console.log("Home offer product Deleted Sucessfully");
        res.redirect('/admin/latestproduct')
    } catch (err) {
        console.log(err);
    }
},
AddArticles: async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        const imageurl = result.url;
        
        const { articledescription,articledate } = req.body;

        await article.create({ articledescription,articledate,  articleimage: imageurl });
        console.log("Article Added Successfully");
        res.redirect('/admin/article');
    } catch (err) {
        console.error(err);
    }
},
getArticle: async (req, res) => {
    try {
        
        const articles=await article.find()
       res.render('admin/home/articles', { layout: "adminlayout",articles})
       
    } catch (err) {
        console.log(err);
    }
},
editArticle : async (req, res) => {
    try {
        const { id } = req.params;
        const { articledescription, articledate } = req.body;

        let imageurl = null;

        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            imageurl = result.url;
        }

        const updatedFields = {};

        if (articledate) {
            updatedFields.articledate = articledate;
        }
        if (articledescription) {
            updatedFields.articledescription = articledescription;
        }

        if (imageurl) {
            updatedFields.articleimage = imageurl;
        }

        const updatedArticle = await article.findOneAndUpdate(
            { _id: id },
            { $set: updatedFields },
            { new: true }
        );


        console.log("Article Successfully updated");
        res.redirect('/admin/article');
    } catch (err) {
        console.log(err);
    }
},
DeleteArticle: async (req, res) => {
    try {
        await article.findByIdAndDelete({ _id: id });
        console.log("Article Deleted Sucessfully");
        res.redirect('/admin/article')
    } catch (err) {
        console.log(err);
    }
},
};
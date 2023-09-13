const express=require('express')
const router = express.Router();
const Admincontroller=require('../controllers/Admincontrollers');
const homepagecontroller = require('../controllers/homepagecontroller');
const upload=require("../util/multer");
const aboutpagecontroller = require('../controllers/aboutpagecontroller');
const sweetgallery = require('../controllers/sweetgallery');
const giftingcontroller = require('../controllers/giftingcontroller');
const contactcontroller = require('../controllers/contactcontroller');
const adminauth = require('../Middlewears/Adminauth')


router.get("/",adminauth.adminauth,Admincontroller.renderDashboard);
router.post("/login",Admincontroller.PostLogin);
router.get("/login",Admincontroller.GetLogin);
router.get("/logout",adminauth.adminauth,Admincontroller.AdminLogout);

//Home Banner
router.get("/homebanner",adminauth.adminauth,homepagecontroller.gethomebanner);
router.post('/addhomebanner',adminauth.adminauth,upload.single('bannerimage'),homepagecontroller.Addhomebanner)
router.post('/edithomebanner/:id',adminauth.adminauth,upload.single('bannerimage'),homepagecontroller.edithomebanner);
router.get('/deletehomebanner/:id',adminauth.adminauth,homepagecontroller.Deletehomebanner);


//Offer product -home page
router.get("/offproduct",adminauth.adminauth,homepagecontroller.getoffproduct);
router.post("/addoffproduct",adminauth.adminauth,upload.single('offproimage'),homepagecontroller.Addoffproduct);
router.post('/editoffproduct/:id',adminauth.adminauth,upload.single('offproimage'),homepagecontroller.editoffproduct);
router.get('/deleteoffproduct/:id',adminauth.adminauth,homepagecontroller.Deleteoffproduct);


//Latest product -home page
router.get("/latestproduct",adminauth.adminauth,homepagecontroller.getlatestproduct);
router.post("/addlatestproduct",adminauth.adminauth,upload.single('latproimage'),homepagecontroller.Addlatestproduct);
router.post('/editlatestproduct/:id',adminauth.adminauth,upload.single('latproimage'),homepagecontroller.editlatestproduct);
router.get('/deletelatestproduct/:id',adminauth.adminauth,homepagecontroller.Deletelatestproduct);


//Articles and news in home & blog pages
router.get('/article',adminauth.adminauth,homepagecontroller.getArticle);
router.post('/addarticle',adminauth.adminauth,upload.single('articleimage'),homepagecontroller.AddArticles);
router.post('/editarticle/:id',adminauth.adminauth,upload.single('articleimage'),homepagecontroller.editArticle);
router.get('/deletearticle/:id',adminauth.adminauth,homepagecontroller.DeleteArticle);


//About page
router.get('/about',adminauth.adminauth,aboutpagecontroller.GetAbout);
router.post('/addabout',adminauth.adminauth,upload.single('aboutimage'),aboutpagecontroller.AddAbout);
router.post('/editabout/:id',adminauth.adminauth,upload.single('aboutimage'),aboutpagecontroller.EditAbout);
router.get('/deleteabout/:id',adminauth.adminauth,aboutpagecontroller.DeleteAbout);


//sweet gallery page
router.get('/sweetgallery',adminauth.adminauth,sweetgallery.Getsweetproduct);
router.post('/addsweetproduct',adminauth.adminauth,upload.single('sweetproimage'),sweetgallery.Addsweetproduct);
router.post('/editsweetporduct/:id',adminauth.adminauth,upload.single('sweetproimage'),sweetgallery.Editsweetproduct);
router.get('/deletesweetproduct/:id',adminauth.adminauth,sweetgallery.Deletesweetproduct);


//Gifting page
router.get('/gifting',adminauth.adminauth,giftingcontroller.Getgifting);
router.post('/addgifting',adminauth.adminauth,upload.single('giftproimage'),giftingcontroller.Addgifting);
router.post('/editgifting/:id',adminauth.adminauth,upload.single('giftproimage'),giftingcontroller.Editgifting);
router.get('/deletegifting/:id',adminauth.adminauth,giftingcontroller.Deletegifting);


//contact 
router.post('/addcontact',contactcontroller.Addcontact);
router.get('/contact',adminauth.adminauth,contactcontroller.Getcontact);
router.get('/deletecontact/:id',adminauth.adminauth,contactcontroller.Deletecontact);


module.exports=router
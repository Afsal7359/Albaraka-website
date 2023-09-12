const express=require('express')
const router = express.Router();
const Admincontroller=require('../controllers/Admincontrollers');
const homepagecontroller = require('../controllers/homepagecontroller');
const upload=require("../util/multer");
const aboutpagecontroller = require('../controllers/aboutpagecontroller');
const sweetgallery = require('../controllers/sweetgallery');
const giftingcontroller = require('../controllers/giftingcontroller');
const contactcontroller = require('../controllers/contactcontroller');



router.get("/",Admincontroller.renderDashboard);
router.post("/login",Admincontroller.PostLogin);
router.get("/login",Admincontroller.GetLogin);


//Home Banner
router.get("/homebanner",homepagecontroller.gethomebanner);
router.post('/addhomebanner',upload.single('bannerimage'),homepagecontroller.Addhomebanner)
router.post('/edithomebanner/:id',upload.single('bannerimage'),homepagecontroller.edithomebanner);
router.get('/deletehomebanner/:id',homepagecontroller.Deletehomebanner);


//Offer product -home page
router.get("/offproduct",homepagecontroller.getoffproduct);
router.post("/addoffproduct",upload.single('offproimage'),homepagecontroller.Addoffproduct);
router.post('/editoffproduct/:id',upload.single('offproimage'),homepagecontroller.editoffproduct);
router.get('/deleteoffproduct/:id',homepagecontroller.Deleteoffproduct);


//Latest product -home page
router.get("/latestproduct",homepagecontroller.getlatestproduct);
router.post("/addlatestproduct",upload.single('latproimage'),homepagecontroller.Addlatestproduct);
router.post('/editlatestproduct/:id',upload.single('latproimage'),homepagecontroller.editlatestproduct);
router.get('/deletelatestproduct/:id',homepagecontroller.Deletelatestproduct);


//Articles and news in home & blog pages
router.get('/article',homepagecontroller.getArticle);
router.post('/addarticle',upload.single('articleimage'),homepagecontroller.AddArticles);
router.post('/editarticle/:id',upload.single('articleimage'),homepagecontroller.editArticle);
router.get('/deletearticle/:id',homepagecontroller.DeleteArticle);


//About page
router.get('/about',aboutpagecontroller.GetAbout);
router.post('/addabout',upload.single('aboutimage'),aboutpagecontroller.AddAbout);
router.post('/editabout/:id',upload.single('aboutimage'),aboutpagecontroller.EditAbout);
router.get('/deleteabout/:id',aboutpagecontroller.DeleteAbout);


//sweet gallery page
router.get('/sweetgallery',sweetgallery.Getsweetproduct);
router.post('/addsweetproduct',upload.single('sweetproimage'),sweetgallery.Addsweetproduct);
router.post('/editsweetporduct/:id',upload.single('sweetproimage'),sweetgallery.Editsweetproduct);
router.get('/deletesweetproduct/:id',sweetgallery.Deletesweetproduct);


//Gifting page
router.get('/gifting',giftingcontroller.Getgifting);
router.post('/addgifting',upload.single('giftproimage'),giftingcontroller.Addgifting);
router.post('/editgifting/:id',upload.single('giftproimage'),giftingcontroller.Editgifting);
router.get('/deletegifting/:id',giftingcontroller.Deletegifting);


//contact 
router.post('/addcontact',contactcontroller.Addcontact);
router.get('/contact',contactcontroller.Getcontact);
router.get('/deletecontact/:id',contactcontroller.Deletecontact);


module.exports=router
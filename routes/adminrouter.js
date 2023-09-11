const express=require('express')
const router = express.Router();
const Admincontroller=require('../controllers/Admincontrollers');
const homepagecontroller = require('../controllers/homepagecontroller');
const upload=require("../util/multer")



router.get("/",Admincontroller.renderDashboard);
router.get("/homebanner",homepagecontroller.gethomebanner);
router.post('/addhomebanner',upload.single('bannerimage'),homepagecontroller.Addhomebanner)
router.post('/edithomebanner/:id',upload.single('bannerimage'),homepagecontroller.edithomebanner);
router.get('/deletehomebanner/:id',homepagecontroller.Deletehomebanner);
router.get("/offproduct",homepagecontroller.getoffproduct);
router.post("/addoffproduct",upload.single('offproimage'),homepagecontroller.Addoffproduct);
router.post('/editoffproduct/:id',upload.single('offproimage'),homepagecontroller.editoffproduct);
router.get('/deleteoffproduct/:id',homepagecontroller.Deleteoffproduct);
router.get("/latestproduct",homepagecontroller.getlatestproduct);
router.post("/addlatestproduct",upload.single('latproimage'),homepagecontroller.Addlatestproduct);
router.post('/editlatestproduct/:id',upload.single('latproimage'),homepagecontroller.editlatestproduct);
router.get('/deletelatestproduct/:id',homepagecontroller.Deletelatestproduct);
router.get('/article',homepagecontroller.getArticle);
router.post('/addarticle',upload.single('articleimage'),homepagecontroller.AddArticles);
router.post('/editarticle/:id',upload.single('articleimage'),homepagecontroller.editArticle);
router.post('/deletearticle/:id',homepagecontroller.DeleteArticle);
router.post("/login",Admincontroller.PostLogin);
router.get("/login",Admincontroller.GetLogin);
// router.post("/login",Admincontroller.PostLogin);
// router.get("/logout",Admincontroller.AdminLogout);

module.exports=router
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
router.post("/Addoffproduct",upload.single('offproimage'),homepagecontroller.Addoffproduct);

// router.post('/editbannerimage/:id',upload.single('bannerimage'),homepagecontroller.editbannerimage);
// router.post("/login",Admincontroller.PostLogin);
// router.get("/logout",Admincontroller.AdminLogout);

module.exports=router
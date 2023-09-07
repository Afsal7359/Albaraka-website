const express=require('express')
const router = express.Router();
const Admincontroller=require('../controllers/Admincontrollers');
const homepagecontroller = require('../controllers/homepagecontroller');
const upload=require("../util/multer")



router.get("/",Admincontroller.renderDashboard);
// router.get("/banner",homepagecontroller.homebanner);
router.get("/bannerhome",homepagecontroller.getbanner);
router.post('/addhomebanner',upload.single('bannerimage'),homepagecontroller.Addhomebanner)
router.post('/editbanner/:id',homepagecontroller.editbanner);
router.post('/editbannerimage/:id',upload.single('bannerimage'),homepagecontroller.editbannerimage);
// router.post("/login",Admincontroller.PostLogin);
// router.get("/logout",Admincontroller.AdminLogout);

module.exports=router
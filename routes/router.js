const express= require("express")
const router= express.Router()
//load controller 
const HomeController=require("../controllers/HomeController")

router.get("/",HomeController.homepage)
router.get("/second",HomeController.secondpage)
module.exports=router
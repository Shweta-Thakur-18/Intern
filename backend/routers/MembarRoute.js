const express=require("express")
const {MemberHandle}=require("../controllers/MemberController")
const router=express.Router()

router.post("/memData",MemberHandle)



module.exports=router;
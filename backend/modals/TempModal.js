const mongoose=require("mongoose")
const Member=require("./MemberModal");
const User=require("./UserModal")

const TempSchema=mongoose.Schema({
    username:User,
    members:Member
})
const Temp=mongoose.model("Temp",TempSchema);


module.exports=Temp; 

const mongoose=require("mongoose")


const UserSchema=mongoose.Schema({
    email:{type:"String",required:true,unique: true},
    pass:{type:"String",required:true},
    pin: { type: Number, required: true }, 
},{timestamps:true}
)

const User=mongoose.model("User",UserSchema);

module.exports=User;
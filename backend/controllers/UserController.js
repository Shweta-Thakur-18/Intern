const asynchandler=require("express-async-handler");
const User=require("../modals/UserModal")

const registerUser=asynchandler(async(req,res)=>{
    const { email, pass ,pin} = req.body;
    
    if(!email || !pass || !pin ){
        res.status(400);
        throw new Error("Please enter all the fields")
    }
    const userExists=await User.findOne({email});

    if(userExists){
        res.status(400);
        console.log("User Already exist");
    }
        const user= new User({email,pass,pin});
        
       await user.save();
        
             
            if(user){
                res.json({
                   _id:user._id,
                    email: user.email,
                    pass: user.pass,
                    pin: user.pin,
                    
                })

            }else{
                res.status(500)
                console.log('error')
            }

    

})
const authUser=asynchandler(async(req,res)=>{
    const {email,pass}=req.body;
    
    const user=await User.findOne({email})
    
    console.log(user.email)

    if(user && (user.pass===pass)){
        res.json({
            _id: user._id,
            email:user.email,
            pin: user.pin,
        });
    }else{
        res.status(401);
        throw new Error('Invalid Email or Password');
    }

})

const verifyPin = async (req, res) => {
    const { email, pin } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        if (user.pin === pin) {
            res.json({
                _id: user._id,
                email: user.email,
            });
        } else {
            res.status(401).json({ message: "Invalid PIN" });
        }
    } catch (error) {
        console.error("Error in PIN verification:", error);
        res.status(500).json({ message: "Server Error" });
    }
};


module.exports={registerUser,authUser,verifyPin};
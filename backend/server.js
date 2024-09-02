const express =require("express")
const cors=require("cors")
const UserRoute=require("./routers/UserRoute")
const MembarRoute=require("./routers/MembarRoute")
const dotenv=require("dotenv")
const mongodb=require("./config/db")



dotenv.config();
mongodb();

const app=express();

app.use(express.json());
app.use(cors());


app.use("/api/user",UserRoute)
app.use("/api/member",MembarRoute);



const PORT=process.env.PORT || 8000;
app.listen(PORT,()=>console.log("server is running"))
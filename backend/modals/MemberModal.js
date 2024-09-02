const mongoose=require("mongoose")

const MemberSchema=mongoose.Schema({
    CreatedBy:{type:"String"},
    AadharCard:{type:"String"},
    Title:{type:"String"},
    Gender:{type:"String"},
    MemberName:{type:"String"},
    FatherName:{type:"String"},
    Mobile:{type:"Number"},
    AlternateMobile:{type:"Number"},
    Email:{type:"String"},
    AlternateEmail:{type:"String"},
    Address:{type:"String"},
    Landmark:{type:"String"},
    PinCode:{type:"Number"},
    State:{type:"String"},
    City:{type:"String"},
    MartialStatus:{type:"String"},
    Occuption:{type:"String"},
    AnnualIncome:{type:"Number"},
    dob:{type:"String"},
    doJ:{type:"String"}
})


const Member=mongoose.model("Member",MemberSchema);

module.exports=Member;
const asynchandler=require("express-async-handler");
const Member=require("../modals/MemberModal");
const User=require("../modals/UserModal")

const MemberHandle=asynchandler(async(req,res)=>{
    const {aadhar,
        title,
        memName,
        mobileNo,
        memEmail,
        address,
        pincode,
        city,
        occupation,
        dob,
        gender,
        income,
        careOf,
        altMob,
        altEmail,
        landmark,
        state,
        mart,
        doj,
    crtBy}=req.body;
    const member=await new Member({
        CreatedBy:crtBy,
        AadharCard:aadhar,
        Title:title,
        MemberName:memName,
        Mobile:mobileNo,
        Email:memEmail,
        Address:address,
        Pincode:pincode,
        City:city,
        Occuption:occupation,
        dob,
        Gender:gender,
        AnnualIncome:income,
        FatherName:careOf,
        AlternateMobile:altMob,
        AlternateEmail:altEmail,
        Landmark:landmark,
        State:state,
        MartialStatus:mart,
        doJ:doj})
    member.save();
    console.log(member);
    if(member){
        res.json({
            id:member._id,
            CreatedBy:member.crtBy,
            AadharCard:member.aadhar,
            Title:member.title,
            Gender:member.gender,
            MemberName:member.memName,
            Mobile:member.mobileNo,
            AlternateMobile:member.altMob,
            Email:member.memEmail,
            AlternateEmail:member.altEmail,
            Address:member.address,
            Landmark:member.landmark,
            PinCode:member.pincode,
            State:member.state,
            City:member.city,
            MartialStatus:member.mart,
            Occuption:member.occupation,
            AnnualIncome:member.income,
            dob:member.dob,
            doJ:member.doj,
            FatherName:member.careOf
        })
    }else{
        res.status(500)
        console.log('error')
    }


})

module.exports={MemberHandle};
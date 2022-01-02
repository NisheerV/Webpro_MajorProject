const express= require("express");
const router=express.Router();
require("../db/conn");
const User=require("../model/userschema");

//async=await
router.post("/registers", async (req,res)=>{
    const {Name,Contact,Email,Designation,Department}=req.body;
    if (!Name || !Contact || !Email || !Designation || !Department){
        return res.status(422).json({error:"plz fill the field properly"});
    }
    try{
        const userExist=await User.findOne({Email:Email});
        if (userExist){
            return res.status(422).json({error:"Email already exist"});
        }
        const user=new User({Name,Contact,Email,Designation,Department});
        await user.save();
        res.status(201).json({message:'user registered successfully'});
    }
    catch(error){
        console.log(error);
    }
});

router.get("/emp", async (req,res)=>{
    User.find()
    .then(result=>{
        res.status(200).json({
            UserData:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
})



module.exports=router;
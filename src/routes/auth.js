const express=require("express");
const userModel=require("../models/user");
const app=express();

app.post("/signin",async (req,res)=>{
    const user=await userModel.find({"user":req.body.user,"pass":req.body.pass}).then(result=>{
        try{
            res.send(result);
        }catch (error){
            res.status(500).send(error);
        }
    });
    
});

app.post("/signup", async (req,res)=>{
    const user=new userModel(req.body);

    try{
        await user.save();
        res.send(user);
    }catch(error){
        console.log(error)
        res.status(500).send(error);
    }
})

module.exports=app;
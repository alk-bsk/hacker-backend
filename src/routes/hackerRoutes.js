const express=require("express");
const hackerModel=require("../models/hacker");
const rank=require("../logic/rank");
const app=express();

app.get("/findAllhacker",async (req,res)=>{
    const hacker=await hackerModel.find({}).sort({"Name":1}).then(result=>{
        try{
            res.send(result);
        }catch (error){
            res.status(500).send(error);
        }
    });
    
});

app.get("/findAllhacker/:id",async (req,res)=>{
    const hacker=await hackerModel.findById(req.params.id);
    try{
        res.send(hacker);
    }catch (error){
        res.status(500).send(error);
    }
});

app.get("/findHackerByRank/:no",async (req,res)=>{
    let hacker=await hackerModel.find({});
   
    try{
        if(hacker.length>0){
            let rankedHacker=await rank(hacker);
            res.send(rankedHacker.slice(0,req.params.no));
        }else{
            res.send([]);
        }

    }catch (error){
        res.status(500).send(error);
    }
});

app.post("/hacker", async (req,res)=>{
    const hacker=new hackerModel(req.body);

    try{
        await hacker.save();
        res.send(hacker);
    }catch(error){
        console.log(error)
        res.status(500).send(error);
    }
})

module.exports=app;
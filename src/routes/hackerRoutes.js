const express=require("express");
const hackerModel=require("../models/hacker");
const rank=require("../logic/rank");
const app=express();

app.get("/hackers",async (req,res)=>{
    const hacker=await hackerModel.find({}).sort({"Name":1}).then(result=>{
        try{
            res.send(result);
        }catch (error){
            res.status(500).send(error);
        }
    });
    
});

app.get("/hacker/:id",async (req,res)=>{
    const hacker=await hackerModel.findById(req.params.id);
    try{
        res.send(hacker);
    }catch (error){
        res.status(500).send(error);
    }
});

app.get("/hackers-rank/:no",async (req,res)=>{
    let hacker=await hackerModel.find({});
    let no=req.params.no;
    try{
        if(hacker.length>0){
            let rankedHacker=await rank(hacker);
            if(no=="All"){
                res.send(rankedHacker);
            }else{
                res.send(rankedHacker.slice(0,no));
            }  
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
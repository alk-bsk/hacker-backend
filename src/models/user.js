const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    "user":{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    "pass":{
        type: String,
        required: true,
        trim: true
    }
})

const user=mongoose.model("user",userSchema);

module.exports=user;
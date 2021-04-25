const mongoose=require("mongoose");

const Competitive=new mongoose.Schema({
    "Data Structures":{
        type: Number
    },
    "Algorithms":{
        type: Number
    },
    "C++":{
        type: Number
    },
    "Java":{
        type: Number
    },
    "Python":{
        type: Number
    },
    "HTML":{
        type: Number
    },
    "Javascript":{
        type: Number
    }
});

const hackerSchema=new mongoose.Schema({
    "Name":{
        type: String,
        required: true,
        trim: true
    },
    "Profile Link":{
        type: String,
        trim: true
    },
    "Location":{
        type: String,
        trim: true
    },
    "Education":{
        type: String,
        trim: true
    },
    "Challenges solved":{
        type: Number,
        trim: true
    },
    "Solutions submitted":{
        type: Number,
        trim: true
    },
    "Solution accepted":{
        type: Number,
        trim: true
    },
    "Overall Rank":{
        type: Number,
        trim: true
    },
    "Followers":{
        type: Number,
        trim: true
    },
    "Following":{
        type: Number,
        trim: true
    },
    "Competitive Percentile":{
        type: Competitive,
    },
    'No of votes':{
        type: Number,
        trim: true
    },
    "Timestamp":{
        type: Number,
        trim: true
    },
    "Device type":{
        type: String,
        trim: true
    }
})



const hacker=mongoose.model("hacker",hackerSchema);

module.exports=hacker;
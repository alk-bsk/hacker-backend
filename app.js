const express=require("express");
const hackerRoute=require("./src/routes/hackerRoutes.js");
const authRoute=require("./src/routes/auth.js");
require("./src/db/mongoose");
const cors=require("cors");
const app=express();
app.use(express.json());
const  port = process.env.PORT;

app.use(cors());
app.use(authRoute);
app.use(hackerRoute);


app.listen(port, ()=>{
    console.log("Server is running: "+port);
});
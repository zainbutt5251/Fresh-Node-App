//load dependencies 
const express= require("express")
const mongoose= require("mongoose")
const path = require('path')
// /set port 
const app=express()
app.listen("9000",()=>{
    console.log("server start ")
});

//app setting 
const AppRoutes=require("./routes/router")
app.use("/",AppRoutes );
app.use(express.json());
app.set('view engine', 'ejs');


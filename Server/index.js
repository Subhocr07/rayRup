const express = require('express')
const mongoose = require('mongoose');
const server=express();
const serverRoute=require('./routes/server');

//Server route
server.use("/",serverRoute);
//MongoDb route
const MONGOURI="mongodb+srv://Subho:2022@socialmedia.s3obl.mongodb.net/Rayrup";
mongoose.connect(MONGOURI,(err)=>{
    !err?console.log("DB connected"):console.log(err);
});

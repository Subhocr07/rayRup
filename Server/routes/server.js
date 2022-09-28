const express = require('express')
const server=express();
const cors=require('cors');


const PORT = 7000;


const userRegister=require("./register");
const userLogin=require("./login");
const userProfile=require("./profile");


server.listen(PORT,(err)=>{
    !err?(console.log(`Server started at ${PORT}`)):
    console.log(err);
});

server.get("/",(req,res)=>{
    res.send("App started")
});


server.use(express.json()) // for parsing application/json
server.use(express.urlencoded({ extended: false }));
server.use(cors);

server.use("/",userRegister);
server.use("/",userLogin);
server.use("/",userProfile);



module.exports=server;
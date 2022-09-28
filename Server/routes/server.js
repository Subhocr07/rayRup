const express = require('express')
const server=express();
const cors=require('cors');

//required items
const userRegister=require("./register");
const userLogin=require("./login");
const userProfile=require("./profile");

//server port and listen
const PORT = 7000;
server.listen(PORT,(err)=>{
    !err?(console.log(`Server started at ${PORT}`)):
    console.log(err);
});
//body parser
server.use(express.json()) // for parsing application/json
server.use(express.urlencoded({ extended: false }));
server.use(cors());

//servers
server.get("/",(req,res)=>{
    res.send("App started")
});

server.use("/",userRegister);
server.use("/",userLogin);
server.use("/",userProfile);



module.exports=server;
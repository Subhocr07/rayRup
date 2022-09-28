const express= require("express");
const route=express.Router();
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
require("dotenv").config();
const userModel=require("../models/userModel");

route.post("/login",(req,res)=>{
    let { email, password}=req.body

    if (!email || !password) {
        return res.status(400).send("Please Fill Your Login Details")
    }

    userModel.findOne({email:email}).then((exist)=>{
    
        if (exist) {
            bcrypt.compare(password,exist.password).then((check)=> {
                if (check){
                    const token = jwt.sign(exist.email , process.env.SECRET_KEY)
                    res.status(200).send(token)
                }else {
                    return res.status(400).send("Invalid User Credentials")
                }
            })
        }else {
            return res.status(400).send("User Does Not Exist")
        }
    })
});

module.exports=route
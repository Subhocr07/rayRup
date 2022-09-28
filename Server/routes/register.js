const express=require('express')
const route=express.Router();
const bcrypt=require("bcryptjs");
const userModel=require("../models/userModel")



route.post("/register",(req,res)=> {
    console.log(req.body)
    let {email,username,fullname, password, cpassword}=req.body

    if (!email || !password || !username|| !fullname || !cpassword) {
        return res.status(400).send('Please Fill the Field')
    }

    userModel.findOne({email:email}).then((userExist)=> {
        if(userExist) {
            return res.status(401).send("User Already Exist")
        }
        else {
            if (password==cpassword) {
                bcrypt.hash(password,10).then((hashpassword)=> {
                   userModel.create({
                        email:email,
                        username:username,
                        fullname:fullname,
                        password:hashpassword
                    }).then((data)=> {
                        res.status(200).send("User Successfully Created");
                        console.log(data)
                    }).catch((error)=> {
                        console.log(error)
                    })
                })
            }
            else {
                return res.status(402).send("Password Mismatch")
            }
        }
    }).then((userExist)=>{
        console.log(userExist)
    }).catch((error)=>{
        console.log(error)
    })
});

module.exports =route;
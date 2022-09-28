import React from "react";
import Logo from "../assets/elipise.png"
import logo from "../assets/Ellipse 32elipise_down.png"
import Box from "../assets/box.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import "./Login.css";

const Login = () => {
    const navigate=useNavigate();

  const Signup=()=>{
    navigate("/register")
  }
    const [data, setdata]=useState({
        email:"",
        password:"",
    })

    useEffect(()=> {
        
        const auth=localStorage.getItem('user')
        if (auth) {
            navigate("/")
        }
    })

    const handlesubmit = (e) => {
        e.preventDefault()
        axios({
            method:'POST',
            headers:{
                // auth: localStorage.setItem('user')
            },
            url:"http://localhost:7000/login",
            data:data
        }).then((token)=> {
            console.log('Hello',token.data)
            localStorage.setItem("user",token.data)
            navigate("/");
        }).catch((err)=> {
            window.alert(err.response.data)
        })
    }




  return (
    <>
      <div className="container">
        <img src={Logo} alt="elipse-up" className="elipse-up"></img>
        <img src={logo} alt="elipse-down" className="elipse-down"></img>
        <div className="container-2">
          <img src={Box} alt="box" className="box-down"></img>
          <img src={Box} alt="box" className="box-up"></img>
          <div className="logo">LOGO</div>
          <div className="tittle">
            Enter your credentials to access your account
          </div>
          <input
            type="email"
            placeholder="Please enter email"
            className="email"
            onChange={(e) => {
              setdata({ ...data, email: e.target.value });
            }}
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="password"
            onChange={(e) => {
              setdata({ ...data, password: e.target.value });
            }}
          ></input>
          <button className="Login" onClick={handlesubmit}>
            Log in
          </button>
          <a href={"./register"} className="Register" onClick={Signup}>
            Register
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;

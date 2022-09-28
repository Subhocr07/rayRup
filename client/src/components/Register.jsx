import Logo from "../assets/elipise.png"
import logo from "../assets/Ellipse 32elipise_down.png"
import Box from "../assets/box.png"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import "./Register.css"
const Register =()=>{
   
  let navigate=useNavigate()

    const [data, setdata]=useState({
        email:"",
        username:"",
        fullname:"",
        password:"",
        cpassword:""
    })

    const handlesubmit = (e) => {
        e.preventDefault()
        axios({
            method:"POST",
            url:'http://localhost:7000/register',
            data:data
        }).then((user)=> {
                window.alert(user.data)
                navigate("/login")
        }).catch((err)=> {
            window.alert(err.response.data)
        })
    }
    return(
    <>
    <div className="container">
        <img src={Logo} alt="elipse-up" className="elipse-up"></img>
        <img src={logo} alt="elipse-down" className="elipse-down"></img>
        <div className="container-2">
          <img src={Box} alt="box" className="box-down"></img>
          <img src={Box} alt="box" className="box-up"></img>
          <div className="logo-1">
            LOGO
          </div>
          <div className="tittle-1">
            Create New Account
          </div>
          <input type="email" placeholder="Email" className="title-2" onChange={(e)=> {setdata({...data, email: e.target.value})}} ></input>
          <input type="text" placeholder="Fullname" className="title-2" onChange={(e)=> {setdata({...data, fullname: e.target.value})}} ></input>
          <input type="text" placeholder="Username" className="title-2" onChange={(e)=> {setdata({...data, username: e.target.value})}} ></input>
          <input type="password" placeholder="password" className="title-2" onChange={(e)=> {setdata({...data, password: e.target.value})}}  ></input>
          <input type="password" placeholder="confrim-password" className="title-2" id="confrim-password-1" onChange={(e)=> {
                    setdata({...data,cpassword:e.target.value})
                }} ></input>

          <button className="signin-1" onClick={handlesubmit} >Register</button>
        </div>
    </div>
    </>
    
  );
}
export default Register;

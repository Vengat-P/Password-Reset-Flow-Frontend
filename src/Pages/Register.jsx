import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css"

const Register = () => {
    const [showPassword,setShowPassword] = useState(false);
    const[username,setUserName]= useState("");
    const[email,setEmail] = useState("");
    const [password,setPassword]= useState("");
    const navigate = useNavigate();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const payload = {username,email,password}
        await axios.post("http://localhost:5000/api/auth/register",payload)
        .then((res)=>{
            toast.success(res.data.message)
            navigate("/login")
        })
        .catch((error)=>{
            console.log(error);
            toast.error(error.response.data.message)
            
        })
        setUserName("")
        setEmail("")
        setPassword("")

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="username">Name</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your Name"
            required
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </p>
        <br />
        <p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email Id"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <br />
        <p>
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" :"password"}
            name="password"
            id="password"
            placeholder="Enter your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="button" onClick={()=> setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}Password</button>
          <br />
          <button type="submit">Register</button>
        </p>
        <br />

      </form>
      <button>
        <Link to={"/login"} >Already Have an account ? <span>Login</span></Link>
      </button>
    </div>
  );
};

export default Register;

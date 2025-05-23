import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/ReactToastify.css"

const Login = ({setToken}) => {
        const [showPassword,setShowPassword] = useState(false);
        const[email,setEmail] = useState("");
        const [password,setPassword]= useState("");
        
        const handleSubmit = async(e)=>{
    e.preventDefault();
            const payload = {email,password}
            await axios.post("http://localhost:5000/api/auth/login",payload)
            //to handle response and errors
            .then((res)=>{
                toast.success(res.data.message)
                // navigate("/Welcome")
                setToken(res.data.token)

            })
            .catch((error)=>{
                console.log(error);
                toast.error(error.response.data.message)
                
            })
            //clear previous value
            setEmail("")
            setPassword("")
        }
    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                    <Link to={"/forgot-password"} >Forgot Password</Link>
                  </button>
                  <br />
                  <button>
                    <Link to={"/"} >Already dont Have an account ? <span>Register</span></Link>
                  </button>
        </div>
    );
};

export default Login;
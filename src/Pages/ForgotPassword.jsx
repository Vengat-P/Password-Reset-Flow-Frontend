import React, { useState } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/ReactToastify.css"

const ForgotPassword = () => {
            const[email,setEmail] = useState("");
            
            const handleSubmit = (e)=>{
        
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
                      <button type="submit">Send</button>
                  </form>
        </div>
    );
};

export default ForgotPassword;
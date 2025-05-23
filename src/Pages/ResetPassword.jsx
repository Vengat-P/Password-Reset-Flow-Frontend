import React from 'react';

const ResetPassword = () => {
            const [showPassword,setShowPassword] = useState(false);
            const [password,setPassword]= useState("");
            const handleSubmit = (e)=>{
        
            }
    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                      <button type="submit">Update Password</button>
                    </p>
                    <br />
            
                  </form>
        </div>
    );
};

export default ResetPassword;
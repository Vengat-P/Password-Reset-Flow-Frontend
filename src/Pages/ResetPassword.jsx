import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import "@fontsource/poppins/400.css";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { id, token } = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:5000/api/auth/reset-password/${id}/${token}`, {
        password,
      })
      //to handle response and errors
      .then((res) => {
        toast.success(res.data.message);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="password">new password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"}Password
          </button>
          <br />
          <button type="submit">Update Password</button>
        </p>
        <br />
      </form>
    </div>
  );
};

export default ResetPassword;

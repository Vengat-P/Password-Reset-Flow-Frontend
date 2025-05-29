import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/auth/forgot-password", { email })
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
    <div className="container vh-100 mw-100 d-flex justify-content-center align-content-center  border border-2 bg-primary-subtle" >
      <form onSubmit={handleSubmit} className=" d-flex flex-column justify-content-center  mt-2 mb-2 px-2 border-2 border rounded-3 bg-white">
        <p className="d-flex flex-column ">
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
        <button type="submit" className="border bg-success text-white rounded-2 p-2">Send</button>
      </form>
    </div>
  );
};

export default ForgotPassword;

import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./Pages/Register";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import { ToastContainer } from "react-toastify";
import "@fontsource/poppins/400.css";
import PageNotFound from "./Pages/PageNotFound";

const App = () => {
  const [token, setToken] = useState("");
  return (
    <div>
      <div>
        <ToastContainer />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/reset-password/:id/:token"
            element={<ResetPassword />}
          />
          <Route path="*" element = {<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

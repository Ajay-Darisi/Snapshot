import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./Signup.js";
import Login from "./Login.js";
import Register from "./Register.js";
import Redirect from "./Redirect.js";

function BeforeLogin() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/secret" element={<Register />} />
        <Route path="/*" element={<Redirect />} />
      </Routes>
    </div>
  );
}

export default BeforeLogin;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const loginUser = () => {
    if (!data.email || !data.password) {
      setError("All fields required");
      return;
    }

    const user = JSON.parse(localStorage.getItem("jobUser"));

    if (
      user &&
      user.email === data.email &&
      user.password === data.password
    ) {
      navigate("/jobs");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="box">
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e)=>setData({...data,email:e.target.value})}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e)=>setData({...data,password:e.target.value})}
      />

      <p className="error">{error}</p>

      <button onClick={loginUser}>Login</button>
    </div>
  );
}

export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let err = {};

    if (!user.name.trim()) err.name = "Name required";

    if (!user.email.trim()) {
      err.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      err.email = "Invalid email";
    }

    if (!user.password) {
      err.password = "Password required";
    } else if (user.password.length < 6) {
      err.password = "Minimum 6 characters";
    }

    return err;
  };

  const submitForm = (e) => {
    e.preventDefault();

    const formErrors = validate();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    localStorage.setItem("jobUser", JSON.stringify(user));

    alert("Registration Successful");

    navigate("/login");
  };

  return (
    <div className="box">
      <h2>Register</h2>

      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e)=>setUser({...user,name:e.target.value})}
        />
        <p className="error">{errors.name}</p>

        <input
          type="email"
          placeholder="Email"
          onChange={(e)=>setUser({...user,email:e.target.value})}
        />
        <p className="error">{errors.email}</p>

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setUser({...user,password:e.target.value})}
        />
        <p className="error">{errors.password}</p>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    let response = await axios.post("http://localhost:4000/auth/user/login", {
      email: data.email,
      password: data.password,
    });

    let res = JSON.stringify(response.data.data);

    localStorage.setItem("login", res);
  };

  return (
    <>
      <div className="login">
        <div className="wrap">
          <Link to="/" className="logo">
            <img
              src="https://www.motioninvest.com/wp-content/uploads/2021/10/MIlogofixedd1.png"
              alt=""
            />
          </Link>

          <div className="text">Login</div>

          <div className="input_wrap">
            <input
              placeholder="Email"
              type="email"
              name="email"
              value={data.email}
              onChange={handleInput}
            />
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={data.password}
              onChange={handleInput}
            />
          </div>

          <div className="btn" onClick={handleLogin}>
            Login
          </div>

          <Link to="/register" className="create">
            Don't have an account? Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;

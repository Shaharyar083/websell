import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
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
            <input placeholder="Email" type="email" />
            <input placeholder="Password" type="password" />
          </div>

          <div className="btn">Login</div>

          <Link to="/register" className="create">
            Don't have an account? Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;

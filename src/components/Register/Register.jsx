import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Login/login.scss";

const Register = () => {
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
          <div className="text">Register</div>
          <div className="input_wrap">
            <input placeholder="User Name" type="text" />
            <input placeholder="Email" type="email" />
            <input placeholder="Password" type="password" />
          </div>

          <div className="btn">Register</div>

          <Link to="/login" className="create">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./login.scss";

const Login = () => {
  const history = useHistory();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    if (data.email && data.password) {
      try {
        let response = await axios.post(
          "http://localhost:4000/auth/user/login",
          {
            email: data.email,
            password: data.password,
          }
        );
        if (response.data.msg === "userLogin Success") {
          toast.success("Login Successfull", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
            let res = JSON.stringify(response.data.data);

            localStorage.setItem("login", res);

            history.push("/");
          }, 2000);
        }
      } catch (err) {
        toast.error("Invalid Credentials", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
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

        <ToastContainer />
      </div>
    </>
  );
};

export default Login;

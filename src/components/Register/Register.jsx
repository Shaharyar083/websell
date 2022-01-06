import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Login/login.scss";

const Register = () => {
  const history = useHistory();
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    if (data.email && data.password) {
      try {
        let response = await axios.post(
          "http://localhost:4000/auth/user/register",
          {
            userName: data.userName,
            email: data.email,
            password: data.password,
          }
        );
        if (response.data.msg === "User Register Success") {
          toast.success("User Register Successfull", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
            history.push("/login");
          }, 2000);
        }
      } catch (err) {
        toast.error("Error While Registering User", {
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
          <div className="text">Register</div>
          <div className="input_wrap">
            <input
              placeholder="User Name"
              type="text"
              name="userName"
              value={data.userName}
              onChange={handleInput}
            />
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

          <div className="btn" onClick={handleRegister}>
            Register
          </div>

          <Link to="/login" className="create">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;

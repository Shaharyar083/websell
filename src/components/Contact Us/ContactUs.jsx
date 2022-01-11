import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./contact.scss";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [data, setData] = useState({
    email: "",
    name: "",
    msg: "",
  });

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (localStorage.getItem("login")) {
      let login = JSON.parse(localStorage.getItem("login"));

      setData({ ...data, email: login.email });
    }
  }, []);

  const send = async () => {
    if (data.email && data.name && data.msg) {
      try {
        let response = await axios.post("http://localhost:4000/message/send", {
          name: data.name,
          email: data.email,
          message: data.msg,
        });

        toast.success("Message send successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setData({
          ...data,
          name: "",
          msg: "",
        });
      } catch (err) {
        toast.error("Message not send", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      toast.error("fill complete form", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  console.log("Contact US States ==========>", data);

  return (
    <>
      <Navbar />
      <div className="contact">
        <div className="left">
          <img
            src="https://www.motioninvest.com/wp-content/uploads/2021/06/ContactUs_Hero.png"
            alt=""
          />
        </div>

        <div className="right">
          <div className="title">Contact Us</div>

          <div className="input-wrap">
            <input
              placeholder="Enter your email"
              name="email"
              type="email"
              value={data.email}
              onChange={handleInput}
            />
            <input
              placeholder="Enter your name"
              name="name"
              type="text"
              value={data.name}
              onChange={handleInput}
            />
            <textarea
              placeholder="Message"
              name="msg"
              type="text"
              value={data.msg}
              onChange={handleInput}
            />

            <div className="btn" onClick={send}>
              Submit
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;

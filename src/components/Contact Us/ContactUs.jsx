import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./contact.scss";
const ContactUs = () => {
  const [data, setData] = useState({
    email: "",
    name: "",
    msg: "",
  });

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  console.log(data);

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

            <div className="btn">Submit</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;

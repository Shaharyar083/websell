import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="left">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              src="https://www.motioninvest.com/wp-content/uploads/2021/10/MIlogofixedd1.png"
              alt=""
              className="logo"
            />
          </Link>

          <Link to="/buy" style={{ textDecoration: "none" }} className="text">
            Buy Site
          </Link>

          <Link to="/sell" style={{ textDecoration: "none" }} className="text">
            Sell Site
          </Link>

          <Link
            to="/contact-us"
            style={{ textDecoration: "none" }}
            className="text"
          >
            Contact Us
          </Link>

          <Link to="/login" style={{ textDecoration: "none" }} className="text">
            Login
          </Link>
        </div>

        <div className="right">
          <Link
            to="/website-valuation-tool"
            style={{ textDecoration: "none" }}
            className="free"
          >
            Free Site Valuation
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

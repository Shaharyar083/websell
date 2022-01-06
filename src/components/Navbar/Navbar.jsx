import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const history = useHistory();
  const [login, setLogin] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [off, setOff] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("login")) {
      let login = JSON.parse(localStorage.getItem("login"));

      if (login.admin === true) {
        setAdmin(true);
      } else {
        setLogin(true);
      }
    } else {
      setOff(true);
    }
  }, []);

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

          {login ? (
            <>
              <Link
                to="/buy"
                style={{ textDecoration: "none" }}
                className="text"
              >
                Buy Site
              </Link>
              <Link
                to="/sell"
                style={{ textDecoration: "none" }}
                className="text"
              >
                Sell Site
              </Link>

              <Link
                to="/contact-us"
                style={{ textDecoration: "none" }}
                className="text"
              >
                Contact Us
              </Link>
            </>
          ) : off ? (
            <>
              <Link
                to="/contact-us"
                style={{ textDecoration: "none" }}
                className="text"
              >
                Contact Us
              </Link>

              <Link
                to="/login"
                style={{ textDecoration: "none" }}
                className="text"
              >
                Login
              </Link>
            </>
          ) : null}
        </div>

        <div className="right">
          {admin ? (
            <Link
              to="/website-valuation-tool"
              style={{ textDecoration: "none" }}
              className="free1"
            >
              Dashboard
            </Link>
          ) : login ? (
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className="free1"
              onClick={() => {
                localStorage.removeItem("login");

                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              }}
            >
              Log out
            </Link>
          ) : off ? (
            <Link
              to="/website-valuation-tool"
              style={{ textDecoration: "none" }}
              className="free"
            >
              Free Site Valuation
            </Link>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Navbar;

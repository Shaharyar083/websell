import React from "react";
import { Link } from "react-router-dom";

import "./homeSection1.scss";
const HomeSection1 = () => {
  return (
    <>
      <div className="homeSection1">
        <div className="left">
          <img
            src="https://www.motioninvest.com/wp-content/uploads/2021/06/Homepage_Hero_Image.png"
            alt=""
          />
        </div>

        <div className="right">
          <div className="text">
            <span>Buy & Sell</span>
            <span>Profitable Websites</span>
          </div>

          {/* <div className="btn-wrap">
            <Link to="/buy" style={{ textDecoration: "none" }} className="buy">
              BUY A WEBSITE
            </Link>

            <Link
              to="/sell"
              style={{ textDecoration: "none" }}
              className="sell"
            >
              SELL A WEBSITE
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HomeSection1;

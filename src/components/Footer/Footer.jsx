import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <img
            src="https://www.motioninvest.com/wp-content/uploads/2021/10/MIlogofixedd1.png"
            alt=""
          />
          <div className="text">ebSell</div>
        </div>

        <div className="para">
          WebSell has helped thousands of entrepreneurs just like you to sell
          and buy websites.
        </div>

        <div className="copy">
          Motion Invest Inc. 2021 All rights reserverd{" "}
          <span style={{ color: "#6754E2", fontWeight: "bold" }}>|</span>{" "}
          Privacy Policy{" "}
          <span style={{ color: "#6754E2", fontWeight: "bold" }}>|</span> Terms
          and Conditions
        </div>
      </div>
    </>
  );
};

export default Footer;

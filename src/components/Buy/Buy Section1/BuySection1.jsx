import React, { useState } from "react";
import Market from "../Market/Market";
import Websell from "../WebSell Listing/Websell";
import "./buySection1.scss";

export const BuySection1 = () => {
  const [show, setShow] = useState("1");
  return (
    <>
      <div className="buySection1">
        <div className="left">
          <img
            src="https://www.motioninvest.com/wp-content/uploads/2021/06/SitesAvailable_Hero-768x432.png"
            alt=""
          />
        </div>

        <div className="right">
          <div className="text">
            <span>Websites Available</span>
          </div>

          <div className="btn-wrap">
            <div
              className="sell"
              style={{
                background: show === "1" ? "#4169e1" : "#e8e1fc",
                color: show === "1" ? "#fff" : "#4169e1",
              }}
              onClick={() => {
                setShow("1");
              }}
            >
              WebSell Listing
            </div>

            <div
              className="buy"
              style={{
                background: show === "2" ? "#4169e1" : "#e8e1fc",
                color: show === "2" ? "#fff" : "#4169e1",
              }}
              onClick={() => {
                setShow("2");
              }}
            >
              MarketPlace
            </div>
          </div>
        </div>
      </div>

      {show === "1" ? <Websell /> : <Market />}
    </>
  );
};

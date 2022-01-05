import React, { useState } from "react";
import SellOrder from "../Sell Order/SellOrder";
import "./sellSection1.scss";

const SellSection1 = () => {
  const [show, setShow] = useState("1");

  return (
    <>
      <div className="sellSection1">
        <div className="left">
          <img
            src="https://www.motioninvest.com/wp-content/uploads/2021/06/Sell_Hero.png"
            alt=""
          />
        </div>

        <div className="right">
          <div className="text">Sell your Site Efficiently</div>

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
              Sell to Websell
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
              Sell in MarketPlace
            </div>
          </div>
        </div>
      </div>

      <SellOrder />
    </>
  );
};

export default SellSection1;

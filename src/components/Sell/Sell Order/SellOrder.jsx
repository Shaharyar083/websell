import React, { useState } from "react";

import google from "../../../assets/google.png";
import { AiOutlineCheck } from "react-icons/ai";

import "./sellOrder.scss";

const SellOrder = () => {
  const [data, setData] = useState({
    url: "",
    niche: "",
    income: "",
  });

  const [monetization, setMone] = useState({ amazon: false, adsense: false });

  const [trend, setTrend] = useState("");

  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = () => {};

  return (
    <>
      <div className="sellOrder">
        <div className="valuate-form">
          <div className="step1">
            <div className="title">WHAT IS YOUR URL?</div>

            <div className="para">Let us check out your website!</div>

            <input
              placeholder="https://www.yourURL.com"
              name="url"
              type="text"
              value={data.url}
              onChange={handleInput}
            />
          </div>

          <div className="step1">
            <div className="title">Website Niche</div>

            <div className="para">What is your website topic?</div>

            <input
              placeholder="eg: Technology"
              name="niche"
              type="text"
              value={data.niche}
              onChange={handleInput}
            />
          </div>

          <div className="step4">
            <div className="title">MONETIZATION METHOD</div>

            <div className="para">How is your site earning income?</div>

            <div className="mone">
              <div
                className="checkimg"
                onClick={() => {
                  setMone({
                    ...monetization,
                    amazon: !monetization.amazon,
                  });
                }}
              >
                <img
                  src="https://www.motioninvest.com/wp-content/uploads/2021/06/Icon_AmazonAssociates.png"
                  alt=""
                />
                {monetization.amazon && <AiOutlineCheck className="icon" />}
              </div>

              <div
                className="checkimg"
                onClick={() => {
                  setMone({
                    ...monetization,
                    adsense: !monetization.adsense,
                  });
                }}
              >
                <img src={google} alt="" />
                {monetization.adsense && <AiOutlineCheck className="icon" />}
              </div>
            </div>
          </div>

          <div className="step5">
            <div className="title">Trend</div>

            <div className="para">
              How has your site been trending over the last 6 months?
            </div>

            <div className="trend">
              <div
                className="checkimg"
                onClick={() => {
                  setTrend("inc");
                }}
              >
                <img
                  src="https://www.motioninvest.com/wp-content/uploads/2021/07/increasing-1.png"
                  alt=""
                />
                {trend === "inc" && <AiOutlineCheck className="icon" />}
              </div>

              <div
                className="checkimg"
                onClick={() => {
                  setTrend("dec");
                }}
              >
                <img
                  src="https://www.motioninvest.com/wp-content/uploads/2021/07/decreasing-1.png"
                  alt=""
                />
                {trend === "dec" && <AiOutlineCheck className="icon" />}
              </div>

              <div
                className="checkimg"
                onClick={() => {
                  setTrend("flat");
                }}
              >
                <img
                  src="https://www.motioninvest.com/wp-content/uploads/2021/07/flat-1.png"
                  alt=""
                />
                {trend === "flat" && <AiOutlineCheck className="icon" />}
              </div>

              <div
                className="checkimg"
                onClick={() => {
                  setTrend("hill");
                }}
              >
                <img
                  src="https://www.motioninvest.com/wp-content/uploads/2021/07/hilly-1.png"
                  alt=""
                />
                {trend === "hill" && <AiOutlineCheck className="icon" />}
              </div>
            </div>
          </div>

          <div className="step1">
            <div className="title">INCOME </div>

            <div className="para">
              What is your sites average monhtly profit over the last 6 months?
            </div>

            <input
              placeholder="$1000.00"
              name="income"
              type="number"
              value={data.income}
              onChange={handleInput}
            />
          </div>

          <div className="step1">
            <div className="title">Analytics</div>

            <div className="para">
              Please share your Google Analytics with us. Our email is
              websell@gmail.com
            </div>
          </div>

          <div
            className="btn-c"
            style={{ marginTop: "30px" }}
            onClick={() => {
              submit();
            }}
          >
            Submit
          </div>
        </div>
      </div>
    </>
  );
};

export default SellOrder;

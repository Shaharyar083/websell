import React from "react";
import "../WebSell Listing/websell.scss";

const Market = () => {
  return (
    <div className="websell">
      <div className="title-main">MarketPlace</div>
      <div className="card">
        <div className="left">
          <img
            src="https://www.motioninvest.com/wp-content/uploads/2021/06/SitesAvailable_Hero-768x432.png"
            alt=""
          />
        </div>

        <div className="right">
          <div className="url">https://www.motioninvest.com/buy-site/</div>

          <div className="price">
            <span>Price: $</span>
            <span>34,270</span>
          </div>

          <div className="wrap">
            <div className="text">
              <div className="title">Niche</div>
              <div className="sub">Food</div>
            </div>

            <div className="text">
              <div className="title">$/mo</div>
              <div className="sub">
                $<span>952</span>
              </div>
            </div>

            <div className="text">
              <div className="title">Source</div>
              <div className="sub">adsense</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;

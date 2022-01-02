import React from "react";
import { Link } from "react-router-dom";

import "./homeSection2.scss";

const HomeSection2 = () => {
  return (
    <>
      <div className="homeSection2">
        <div className="left">
          <div className="title">Free Professional Site Valuation</div>

          <div className="para">
            Submit your site to be evaluated by our team with extensive due
            diligence and we will inform you how your website stacks against
            others
          </div>

          <Link
            to="/website-valuation-tool"
            style={{ textDecoration: "none" }}
            className="free"
          >
            Free Site Valuation
          </Link>
        </div>

        <div className="right">
          <img
            src="https://www.motioninvest.com/wp-content/uploads/2021/06/Free_Site_Eval_Illustration.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default HomeSection2;

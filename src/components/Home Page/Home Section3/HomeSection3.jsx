import React from "react";
import "./homeSection3.scss";

import { AiOutlineMail } from "react-icons/ai";

const HomeSection3 = () => {
  return (
    <>
      <div className="homeSection3">
        <AiOutlineMail color="#6754e2" size={40} />

        <div className="title">Subscribe to our newsletter</div>
        <div className="para">
          Don't miss new sites being listed every week!
        </div>

        <div className="input-wrap">
          <input placeholder="Email" type="email" name="email" />

          <div className="btn">SUBSCRIBE</div>
        </div>
      </div>
    </>
  );
};

export default HomeSection3;

import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { BuySection1 } from "./Buy Section1/BuySection1";
import "./buy.scss";

const Buy = () => {
  return (
    <>
      <Navbar />
      <BuySection1 />
      <Footer />
    </>
  );
};

export default Buy;

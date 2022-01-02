import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import HomeSection1 from "./Home Section1/HomeSection1";
import HomeSection2 from "./Home Section2/HomeSection2";
import HomeSection3 from "./Home Section3/HomeSection3";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <Footer />
    </div>
  );
};

export default Home;

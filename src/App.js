import React from "react";
import { Routes, Route } from "react-router-dom";
import Buy from "./components/Buy/Buy";
import ContactUs from "./components/Contact Us/ContactUs";
import Home from "./components/Home Page/Home";
import WebsiteValuation from "./components/Website Valuation/WebsiteValuation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/website-valuation-tool" element={<WebsiteValuation />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/buy" element={<Buy />} />
      </Routes>
    </>
  );
}

export default App;

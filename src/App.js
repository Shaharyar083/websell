import React from "react";
// import { Routes, Route } from "react-router-dom";
import { Switch, Route, useHistory } from 'react-router-dom';

import Homee from "./Admin/Admin/Home/Homee";
import Buy from "./components/Buy/Buy";
import ContactUs from "./components/Contact Us/ContactUs";
import Home from "./components/Home Page/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Sell from "./components/Sell/Sell";
import WebsiteValuation from "./components/Website Valuation/WebsiteValuation";

// import Homee from "./Admin/Admin/Home/Homee"

function App() {
  return (
    <>
<<<<<<< HEAD
      <Switch>
        <Route path='/' component={Homee} />
        <Route path="/home" component={Home} />
        <Route path="/website-valuation-tool" component={WebsiteValuation} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/buy" component={Buy} />

      </Switch>
=======
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/website-valuation-tool" element={<WebsiteValuation />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
>>>>>>> 90def4ae54d01d2f64c296446409ed5799e1ac22
    </>
  );
}

export default App;

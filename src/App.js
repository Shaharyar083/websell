import React from "react";

import { Switch, Route } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Buy from "./components/Buy/Buy";
import ContactUs from "./components/Contact Us/ContactUs";
import Home from "./components/Home Page/Home";
import Login from "./components/Login/Login";
import MyOrders from "./components/My Orders/MyOrders";
import Register from "./components/Register/Register";
import Sell from "./components/Sell/Sell";
import WebsiteValuation from "./components/Website Valuation/WebsiteValuation";

// import Homee from "./Admin/Admin/Home/Homee"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Switch>
        {/* <Route exact path="/" component={Homee} /> */}
        <Route exact path="/admin" component={Admin} />

        <Route exact path="/" component={Home} />
        <Route path="/website-valuation-tool" component={WebsiteValuation} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/buy" component={Buy} />
        <Route path="/sell" component={Sell} />
        <Route exact path="/myorder" component={MyOrders} />

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </>
  );
}

export default App;

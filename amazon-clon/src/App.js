import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pagess/Home/Home";
import Cart from "./pagess/cart/Cart";
import Header from "./Components/header/Header";
import Order from "./pagess/Order/Order";
import { useStateValue } from "./State/stateProvider";
import Login from "./pagess/login/Login";
import { auth } from "./State/firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Fav from "./pagess/fav/Fav";
import SeeOrder from "./pagess/seeOrder/SeeOrder";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("userAuth", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/order" element={<Order />} />
          <Route path="/fav" element={<Fav />} />
          <Route path="/seeorder" element={<SeeOrder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import "./Subtotal.css";
import { useStateValue } from "../../State/stateProvider";
import { reducer } from "../../State/reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const arr = basket.map((i) => i.item.price);

  const handleCheckout = (e) => {
    e.preventDefault();
    if (user) {
      navigate("/order");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="subtotal">
      <p>
        subtotal(item: {basket.length}) :{" "}
        <strong>{basket.length ? arr.reduce((a, b) => a + b) : "0"}</strong>
      </p>
      <p className="apply">
        Apply Coupon <input type="checkbox" name="" id="" />
      </p>
      <button onClick={handleCheckout}>Prceed to checkout</button>
    </div>
  );
}

export default Subtotal;

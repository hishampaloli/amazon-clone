import React from "react";
import "./Order.css";
import CartProduct from "../../Components/Cartproducts/CartProduct";
import { useStateValue } from "../../State/stateProvider";
import { useNavigate } from "react-router-dom";
import { CardElement } from "@stripe/react-stripe-js";

function Order() {
  const [{ basket, user, seeOrder }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const arr = basket.map((i) => i.item.price);

  const handleOrderClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "EMPTY_CART",
      item: {},
    });
    dispatch({
      type: "SEE_ORDER",
      seeOrder: true,
    });
    navigate("/");
  };
  const home = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="order">
      <div className="order-info">
        <>
          <p>
            <strong>Name &nbsp;&nbsp;&nbsp;:</strong>{" "}
            {user?.email.split("@")[0][0].toUpperCase() +
              user?.email.split("@")[0].slice(1, user.email.length)}
          </p>
        </>
        <>
          {" "}
          <p>
            <strong>Adress &nbsp; :</strong>{" "}
            {user?.email.split("@")[0][0].toUpperCase() +
              user?.email.split("@")[0].slice(1, user.email.length)}
            , 1234 NW Bobcat Lane, mk{" "}
            {user?.email.split("@")[0][0].toUpperCase() +
              user?.email.split("@")[0].slice(1, user.email.length)}
            , MO 78678-6786.{" "}
          </p>
        </>
        <>
          {" "}
          <p>
            <strong>Total &nbsp;&nbsp;&nbsp;&nbsp; : </strong>
            {basket.length ? arr.reduce((a, b) => a + b) : "0"}
          </p>
        </>
        <div className="order-now">
          {/* <CardElement /> */}
          {basket.length > 0 ? (
            <button className="order-btn" onClick={handleOrderClick}>
              Order Now
            </button>
          ) : (
            <button className="order-btn dis" disabled="disabled">
              Order Now
            </button>
          )}
        </div>
      </div>

      <div className="order-items">
        {basket.length > 0 ? (
          basket?.map((items) => {
            return (
              <CartProduct
                id={items.item.id}
                title={items.item.title}
                image={items.item.image}
                price={items.item.price}
                rating={items.item.rating}
              />
            );
          })
        ) : (
          <div className="div">
            <h2>Add something to cart</h2>{" "}
            <button
              className="order-btn"
              onClick={home}
              style={{ marginTop: "10px" }}
            >
              Add to cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Order;

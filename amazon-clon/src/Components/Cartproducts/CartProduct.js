import React, { useState } from "react";
import "./CartProduct.css";
import { useStateValue } from "../../State/stateProvider";
import { reducer } from "../../State/reducer";

function CartProduct(Props) {
  const [{ basket }, dispatch] = useStateValue();
  const [slide, setSlide] = useState(false);

  const removeFromBasket = (e) => {
    e.preventDefault();
    setSlide(true);

    setTimeout(() => {
      dispatch({
        type: "REMOVE_FROM_CART",
        id: Props.id,
      });
      setSlide(false);
    }, 300);

    dispatch({
      type: "REMOVE_FROM_ORDER",
      id: Props.id,
    });
  };

  return (
    <div>
      <div className={slide ? "checkoutProducts slide" : "checkoutProducts"}>
        <img className="checkoutProducts-img" src={Props.image} alt="" />
        <div className="checkoutProducts-info">
          <p className="checkoutProducts-title">{Props.title}</p>
          <p className="checkoutProducts-price">
            <small>$</small> <strong>{Props.price}</strong>
          </p>
          <div className="checkoutProducts-rating">
            {Array(Props.rating)
              .fill()
              .map((_, i) => {
                return <p>⭐</p>;
              })}
          </div>
          <button onClick={removeFromBasket}>Remove from cart</button>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;

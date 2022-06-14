import React, { useState } from "react";
import "./Cart.css";
import Subtotal from "../../Components/Subtotal.js/Subtotal";
import { useStateValue } from "../../State/stateProvider";
import { reducer } from "../../State/reducer";
import CartProduct from "../../Components/Cartproducts/CartProduct";

function Cart() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="cart">
      <div className="first">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
      </div>

      <div className="second">
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
          <h2>Your Cart is Empty</h2>
        )}

        <Subtotal />
      </div>
    </div>
  );
}

export default Cart;

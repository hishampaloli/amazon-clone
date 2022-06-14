import React from "react";
import { ReactDOM } from "react";
import { useStateValue } from "../../State/stateProvider";

function FavProducts({ id, title, price, image, rating }) {
  const [{ fav }, dispatch] = useStateValue();

  const removeFromFav = (e) => {
    e.preventDefault();
    dispatch({
      type: "REMOVE_FROM_FAV",
      id: id,
    });
  };

  const AddtoCart = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });
    dispatch({
      type: "REMOVE_FROM_FAV",
      id: id,
    });

    dispatch({
      type: "ADD_TO_ORDER",
      items: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });

    dispatch({
      type: "SEE_ORDER",
      seeOrder: false,
    });
  };

  return (
    <div className="fav-products">
      <div className="checkoutProducts">
        <img className="checkoutProducts-img" src={image} alt="" />
        <div className="checkoutProducts-info">
          <p className="checkoutProducts-title">{title}</p>
          <p className="checkoutProducts-price">
            <small>$</small> <strong>{price}</strong>
          </p>
          <div className="btn">
            <button onClick={removeFromFav}>Remove from Fav</button>
            <button onClick={AddtoCart}>ADD to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavProducts;

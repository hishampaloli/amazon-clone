import React, { useContext, useState } from "react";
import "./Products.css";
import { useStateValue } from "../../State/stateProvider";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Products({ id, title, price, image, rating }) {
  const [{ basket, fav }, dispatch] = useStateValue();
  const [fave, setFav] = useState(false);

  const addToCart = (e) => {
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

    dispatch({
      type: "SET_NOTIFIACTION",
      notification: true,
    });
  };

  const addFav = (e) => {
    {
      fave ? setFav(false) : setFav(true);
    }
    {
      !fave &&
        dispatch({
          type: "ADD_FAV",
          items: {
            id: id,
            title: title,
            price: price,
            image: image,
          },
        });
    }
  };

  return (
    <div className="Product ">
      <div className="info">
        <p>{title}</p>
        <strong>{price}</strong>
        <p>
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p>⭐</p>;
            })}
        </p>
      </div>

      <div className="image">
        <img src={image} alt="" />
      </div>

      <div className="btn">
        <button onClick={addToCart}> Add to Cart</button>
        <FavoriteIcon
          className={fave ? "fav-on" : "fav-off"}
          onClick={addFav}
        />
      </div>
    </div>
  );
}

export default Products;

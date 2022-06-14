import React from "react";
import FavProducts from "../../Components/FavProducts/FavProducts";
import { useStateValue } from "../../State/stateProvider";
import "./Fav.css";

function Fav() {
  const [{ fav }, dispatch] = useStateValue();

  return (
    <div className="fav">
      <div className="con">
        {fav.length > 0 ? (
          fav.map((i) => {
            return (
              <FavProducts
                id={i.id}
                title={i.title}
                price={i.price}
                image={i.image}
                rating={i.rating}
              />
            );
          })
        ) : (
          <h1 className="fav-h1">Nothing here 😔, Add somthing 🙃...</h1>
        )}
      </div>
    </div>
  );
}

export default Fav;

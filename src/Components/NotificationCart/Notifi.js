import React, { useState } from "react";
import "./Notifi.css";
import { useStateValue } from "../../State/stateProvider";
import { reducer } from "../../State/reducer";
import CancelIcon from "@mui/icons-material/Cancel";

function Notifi(Props) {
  const [hide, setHide] = useState("");

  const handleClick = () => {
    setHide("move");
    setTimeout(() => {
      setHide("hide");
    }, 300);
  };

  const mover = () => {
    setHide("hide");
  };

  setInterval(mover, 3500);

  return (
    <div className={hide === "move" ? "move" : null}>
      <div className={hide === "hide" ? "hide" : "NotifiProducts"}>
        <img className="NotifiProducts-img" src={Props.image} alt="" />
        <div className="NotifiProducts-info">
          <p className="NotifiProducts-title">{Props.title.slice(0, 15)}</p>
          <p className="NotifiProducts-price">
            <small>$</small> <strong>{Props.price}</strong>
          </p>
          <div className="checkoutProducts-rating">
            {Array(Props.rating)
              .fill()
              .map((_, i) => {
                return <p>⭐</p>;
              })}
          </div>
          <CancelIcon className="icon" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default Notifi;

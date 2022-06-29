import React, { useState } from "react";
import { useStateValue } from "../../State/stateProvider";

function SeeOrder() {
  const [{ order, seeOrder }, dispatch] = useStateValue();

  const [title, setTitle] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setTitle(true);
  };

  return (
    <div className="cont" style={{marginTop:'100px'}}>
      {seeOrder ? (
        order.map((i) => {
          return (
            <div className="checkoutProducts pos">
              <img
                className="checkoutProducts-img"
                src={i.items.image}
                alt=""
              />
              <div className="checkoutProducts-info">
                <p className="checkoutProducts-title">{i.items.title}</p>
                <p className="checkoutProducts-price">
                  <small>$</small> <strong>{i.items.price}</strong>
                </p>
                <button onClick={handleClick}>RETURN ITEM</button>
                {title ? (
                  <p style={{ color: "red" }}>
                    Then why the heck are you buying if you are going to
                    return...I am not JEFF BEZOZ
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
            </div>
          );
        })
      ) : (
        <h1>Order something</h1>
      )}

      <div className="line"></div>
    </div>
  );
}

export default SeeOrder;

import React from "react";
import Products from "../../Components/Products/Products";
import "./Home.css";
import { v4 as uuidv4 } from "uuid";
import Notifi from "../../Components/NotificationCart/Notifi";
import { useStateValue } from "../../State/stateProvider";
import { reducer } from "../../State/reducer";
import Header from "../../Components/header/Header";

function Home() {
  const [{ basket, notification }, dispatch] = useStateValue();

  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://www.mobiledekho.com/wp-content/uploads/2018/01/952x501-3-5.jpg"
          alt=""
        />
      </div>

      <div className="home-row">
        <Products
          id={uuidv4()}
          title='Case Compatible with 6.1" iPhone13 Pro Silicone Soft Full Covered Phone Case Shockproof Transparent Case with Dustproof Net and Precise Hole'
          price={10}
          image="https://m.media-amazon.com/images/I/71vpxrOqKJL._AC_SX679_.jpg"
          rating={5}
        />

        <Products
          id={uuidv4()}
          title='Acer Aspire 5 A515-46-R3UB | 15.6" Full HD IPS Display | AMD Ryzen 3 3350U Quad-Core Mobile Processor | 4GB DDR4 | 128GB NVMe SSD | WiFi 6 | Backlit KB | FPR | Amazon Alexa | Windows 11 Home in S mode'
          price={100000}
          image="https://m.media-amazon.com/images/I/7189iXimfWL._AC_SX679_.jpg"
          rating={4}
        />
      </div>

      <div className="home-row">
        <Products
          id={uuidv4()}
          title="OnePlus 9 Pro Morning Mist, 5G Unlocked Android Smartphone U.S Version,12GB RAM+256GB Storage,120Hz Fluid Display,Hasselblad Quad Camera,65W Ultra Fast Charge,50W Wireless Charge,with Alexa Built-in"
          price={1000}
          image="https://m.media-amazon.com/images/I/61smwbhzBML._AC_SY879_.jpg"
          rating={3}
        />
        <Products
          id={uuidv4()}
          title="Anker Soundcore Liberty Air 2 Pro True Wireless Earbuds, Targeted Active Noise Cancelling, PureNote Technology, LDAC, 6 Mics for Calls, 26H Playtime, HearID Personalized EQ, Wireless Charging"
          price={100}
          image="https://m.media-amazon.com/images/I/61n98pENI6L._AC_SX679_.jpg"
          rating={4}
        />
        <Products
          id={uuidv4()}
          title="The lean StartUp"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/71xd3tEmfrL.jpg"
          rating={5}
        />
      </div>

      <div className="home-row">
        <Products
          id={uuidv4()}
          title="JETech Case Compatible with iPhone 13 Pro Max 6.7-Inch, Shockproof Phone Bumper Cover, Anti-Scratch Clear Back (HD Clear)"
          price={34}
          image="https://m.media-amazon.com/images/I/61ephkFZyAL._AC_SX679_.jpg"
          rating={2}
        />
      </div>

      {notification && (
        <div className="noti">
          {basket.length > 0 ? (
            basket?.slice(-basket.length + basket.length - 10).map((items) => {
              return (
                <div className="prod">
                  <Notifi
                    id={items.item.id}
                    title={items.item.title}
                    image={items.item.image}
                    price={items.item.price}
                    rating={items.item.rating}
                  />
                </div>
              );
            })
          ) : (
            <h2>Your Cart is Empty</h2>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;

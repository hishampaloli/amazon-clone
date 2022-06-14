import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { useStateValue } from "../../State/stateProvider";
import { Link } from "react-router-dom";
import { auth } from "../../State/firebase";
import CancelIcon from "@mui/icons-material/Cancel";

function Header() {
  const [{ basket, user, fav, notification }, dispatch] = useStateValue();
  const [small, setSmall] = useState(false);

  const handleLogin = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: "EMPTY_CART",
        item: {},
      });
    }
    {
      small ? setSmall(false) : setSmall(true);
    }
  };

  const handleClick = () => {
    dispatch({
      type: "SET_NOTIFIACTION",
      notification: false,
    });
  };

  const handleNav = () => {
    {
      small ? setSmall(false) : setSmall(true);
    }
  };

  return (
    <div className="header">
      <div className="left">
        <Link to="/">
          <img
            src="https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?fit=2560%2C1578&ssl=1"
            alt=""
          />
        </Link>

        <div className="input-container">
          <input type="text" name="" id="" />

          <div className="ico">
            <SearchIcon />
          </div>
        </div>
      </div>

      <div className="right">
        <div onClick={handleLogin} className={user ? "row-red" : "row-green"}>
          <Link to={!user && "/login"}>
            <p>Hello {user ? user.email.split("@")[0] : "guest"}</p>
            <strong>{user ? "Log out" : "Sing In"}</strong>
          </Link>
        </div>

        <div className="row-fav">
          <Link to="/seeorder">
            <p>return</p>
            <strong>& Orders</strong>
          </Link>
        </div>

        <div className="row">
          <p>Your</p>
          <strong>Prime</strong>
        </div>

        <div className="row-fav">
          <Link to="/fav" onClick={handleClick}>
            <p>Favorites</p>
            <strong>{fav.length}</strong>
          </Link>
        </div>

        <div className="row-cart">
          <Link to="/cart" onClick={handleClick}>
            <ShoppingCartIcon className="ic" />
            <strong>{basket.length}</strong>
          </Link>
        </div>
      </div>

      <div className="small-right">
        <MenuIcon
          className="menu-icon"
          sx={{ fontSize: 58 }}
          onClick={handleNav}
        />
        {small && (
          <div className="nav">
            <CancelIcon className="cancel-icon" onClick={handleNav} />

            <div
              onClick={handleLogin}
              className={user ? "row-red" : "row-green"}
            >
              <Link to={!user && "/login"}>
                <p>Hello {user ? user.email.split("@")[0] : "guest"}</p>
                <strong>{user ? "Log out" : "Sing In"}</strong>
              </Link>
            </div>

            <div className="row">
              <Link to="/seeorder">
                <p>return</p>
                <strong>& Orders</strong>
              </Link>
            </div>

            <div className="row">
              <p>Your</p>
              <strong>Prime</strong>
            </div>

            <div className="row-fav">
              <Link to="/fav" onClick={handleClick} onClick={handleNav}>
                <p>Favorites</p>
                <strong>{fav.length}</strong>
              </Link>
            </div>

            <div className="row-cart">
              <Link to="/cart" onClick={handleClick} onClick={handleNav}>
                <ShoppingCartIcon className="ic" />
                <strong>{basket.length}</strong>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;

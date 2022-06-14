import React, { useState } from "react";
import { useStateValue } from "../../State/stateProvider";
import { reducer } from "../../State/reducer";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../State/firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{ user }, dispatch] = useStateValue();
  const history = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login-container">
        <h1>Sign In</h1>
        <div className="email-box">
          <label htmlFor="">E-mail</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="password-box">
          <label htmlFor="">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button onClick={signIn}>Sign In</button>

        <div className="amzon-info">
          <p>agree to amazon-clone terms and contitions</p>
          <button onClick={register}>Create your Amazon account</button>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import "./Login.css";
import { auth } from "../firebase.js";
import path from "../../utilities/amazonLogo.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //logic for signing in and creating a new account
      const login = (e) => {
        e.preventDefault();
        auth
          .signInWithEmailAndPassword(email, password)
          .then((auth) => {
            //login and redirect to homePage
            history.push("/");
          })
          .catch((e) => {
            alert(e.message);
          });
      };

      const register = (e) => {
        e.preventDefault();
        auth
          .createUserWithEmailAndPassword(email, password)
          .then((auth) => {
            //create a user, login and then redirect to the home page
            history.push("/");
          })
          .catch((e) => {
            alert(e.message);
          });
      };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={path} alt="" />
      </Link>

      <div className="login__container">
        <form action="">
          <h1>Sign in</h1>
          <div>
            <h5>Email</h5>{" "}
            <input
              onChange={(event) => setEmail(event.target.value)}
              className="login__input"
              type="text"
            />
          </div>

          <div>
            <h5>Password</h5>{" "}
            <input
              onChange={(event) => setPassword(event.target.value)}
              className="login__input"
              type="password"
            />
          </div>

          <button onClick={login} className="login__signIn">
            Sign In
          </button>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
        </form>
        <hr style={{ color: "grey" }} />
        <button onClick={register} className="register">
          Create your account
        </button>
      </div>
    </div>
  );
};

export default Login;

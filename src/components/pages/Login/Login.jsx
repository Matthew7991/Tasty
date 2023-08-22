import React from "react";
import Navbar from "../../shared/Navbar/Navbar";
import UserImg from "../../../assets/Images/Profile.svg";
import LockImg from "../../../assets/Images/Lock.svg";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login-container" style={{ backgroundColor: "#70B9BE" }}>
      <main>
        <article className="login-article">
          <form className="login-form">
            <h1 className="login-header">Welcome back!</h1>
            <div className="input-container">
              <label htmlFor="username">username</label>
              <img src={UserImg} alt="" />
              <input
                required
                type="text"
                id="username"
                name="username"
                className="input-field"
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">password</label>
              <img src={LockImg} alt="" />
              <input
                required
                type="password"
                id="password"
                name="password"
                className="input-field"
              />
            </div>
            <button type="submit" className="login-button">Log In</button>
          </form>
          <p className="register-link">
            Need an account? <Link to={"/register"}>Register</Link>
          </p>
        </article>
      </main>
      <Navbar />
    </div>
  );
}

export default Login;

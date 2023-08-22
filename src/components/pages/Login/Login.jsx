import React from "react"
import Navbar from "../../shared/Navbar/Navbar"
import UserImg from "../../../assets/Images/Profile.svg"
import LockImg from "../../../assets/Images/Lock.svg"
import { Link } from "react-router-dom"

function Login() {
  return (
    <>
      <main>
        <article>
          <form>
            <h1>Welcome back!</h1>
            <div>
              <label htmlFor="username">username</label>
              <img
                src={UserImg}
                alt=""
              />
              <input
                required
                type="text"
                id="username"
                name="username"
              />
            </div>
            <div>
              <label htmlFor="password">password</label>
              <img
                src={LockImg}
                alt=""
              />
              <input
                required
                type="password"
                id="password"
                name="password"
              />
            </div>
            <button type="submit">Log In</button>
          </form>
          <p>
            Need an account? <Link to={"/register"}>Register</Link>
          </p>
        </article>
      </main>
      <Navbar />
    </>
  )
}

export default Login

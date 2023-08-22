
import React, { useEffect, useState } from "react"
import Navbar from "../../shared/Navbar/Navbar"
import UserImg from "../../../assets/Images/Profile.svg"
import LockImg from "../../../assets/Images/Lock.svg"
import { Link } from "react-router-dom"
import "./Login.css";


function Login() {
  const [users, setUsers] = useState(() => {
    const usersStorage = JSON.parse(localStorage.getItem("users"))
    return usersStorage ? usersStorage : []
  })

  const [inputUsername, setInputUsername] = useState("")
  const [inputPassword, setInputPassword] = useState("")
  const [loginDataInvalid, setLoginDataInvalid] = useState(false)

  const handleInputUsername = (event) => {
    setInputUsername(event.target.value)
  }
  const handleInputPassword = (event) => {
    setInputPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(users)

    if (
      !users.find(
        (user) =>
          (user.username !== inputUsername && user.email !== inputUsername) ||
          user.password !== inputPassword
      )
    ) {
      setLoginDataInvalid(true)
      return
    }

    setUsers(
      users.map((user) => {
        return user.username !== inputUsername && user.email !== inputUsername
          ? { ...user, loggedIn: false }
          : { ...user, loggedIn: true }
      })
    )
  }

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users))
  }, [users])

  return (
    <div className="login-container" style={{ backgroundColor: "#70B9BE" }}>
      <main>
        <article className="login-article">
          <form className="login-form" onSubmit={handleSubmit}>
            <h1 className="login-header">Welcome back!</h1>
            <div className="input-container">
              <label htmlFor="username">username</label>
              <img src={UserImg} alt="" />
              <input
                onChange={handleInputUsername}
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
                onChange={handleInputPassword}
                required
                type="password"
                id="password"
                name="password"
                className="input-field"
              />
            </div>
            <button type="submit" className="login-button">Log In</button>
            {loginDataInvalid && <output>Login or password invalid</output>}
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

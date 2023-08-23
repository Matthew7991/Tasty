import React, { useEffect, useState } from "react"
import Navbar from "../../shared/Navbar/Navbar"
import UserImg from "../../../assets/Images/Profile.svg"
import LockImg from "../../../assets/Images/Lock.svg"
import { Link, useNavigate } from "react-router-dom"
import "./Login.css"
import Input from "../../shared/Input/Input"

function Login() {
  const [users, setUsers] = useState(() => {
    const usersStorage = JSON.parse(localStorage.getItem("users"))
    return usersStorage ? usersStorage : []
  })

  const [inputUsername, setInputUsername] = useState("")
  const [inputPassword, setInputPassword] = useState("")
  const [loginDataInvalid, setLoginDataInvalid] = useState(false)

  const currentUser = users.find((user) => user.loggedIn === true)
  const navigate = useNavigate()

  useEffect(() => {
    if (currentUser) {
      navigate("/profile")
    }
  }, [users])

  const handleInputUsername = (event) => {
    setInputUsername(event.target.value)
  }
  const handleInputPassword = (event) => {
    setInputPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (
      !users.find(
        (user) =>
          (user.password === inputPassword &&
            user.username === inputUsername) ||
          user.email === inputUsername
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
    <div
      className="login-container"
      style={{ backgroundColor: "#70B9BE" }}>
      <main>
        <article className="login-article">
          <form
            className="login-form"
            onSubmit={handleSubmit}>
            <h1 className="login-header">Welcome back!</h1>
            <Input
              imgUrl={UserImg}
              labelText={"username"}
              name={"username"}
              placeholder={"Username"}
              type={"text"}
              onChange={handleInputUsername}
              required={true}
            />
            <Input
              imgUrl={LockImg}
              labelText={"password"}
              name={"password"}
              placeholder={"Password"}
              type={"password"}
              onChange={handleInputPassword}
              required={true}
            />
            <button
              type="submit"
              className="login-button">
              Log In
            </button>
            {loginDataInvalid && <output>Login or password invalid</output>}
          </form>
          <p className="register-link">
            Need an account? <Link to={"/register"}>Register</Link>
          </p>
        </article>
      </main>
      <Navbar />
    </div>
  )
}

export default Login

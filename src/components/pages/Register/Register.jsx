import React, { useEffect, useState } from "react"
import Navbar from "../../shared/Navbar/Navbar"
import UserImg from "../../../assets/Images/Profile.svg"
import LockImg from "../../../assets/Images/Lock.svg"
import MailImg from "../../../assets/Images/Message.svg"
import { Link, useNavigate } from "react-router-dom"
import "./Register.css"
import Input from "../../shared/Input/Input"

function Register() {
  const [inputEmail, setInputEmail] = useState("")
  const [inputUsername, setInputUsername] = useState("")
  const [inputPassword, setInputPassword] = useState("")
  const [inputPasswordConfirm, setInputPasswordConfirm] = useState("")

  const [displayError, setDisplayError] = useState(false)
  const [passwordNotSame, setPasswordNotSame] = useState(false)

  const [users, setUsers] = useState(() => {
    const usersStorage = JSON.parse(localStorage.getItem("users"))
    return usersStorage ? usersStorage : []
  })

  const currentUser = users.find((user) => user.loggedIn === true)
  const navigate = useNavigate()

  useEffect(() => {
    if (currentUser) {
      navigate("/profile")
    }
  }, [users])

  const handleSubmit = (event) => {
    event.preventDefault()

    if (
      users.find((user) => {
        return user.username === inputUsername || user.email === inputEmail
      })
    ) {
      setDisplayError(true)
      setPasswordNotSame(false)
      return
    }

    if (inputPassword !== inputPasswordConfirm) {
      setPasswordNotSame(true)
      setDisplayError(false)
      return
    }

    setUsers([
      ...users,
      {
        username: inputUsername,
        email: inputEmail,
        password: inputPassword,
        favorites: [],
        loggedIn: true,
      },
    ])

    setTimeout(() => {
      navigate("/login")
    }, 500)
  }

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users))
  }, [users])

  const handleInputEmail = (event) => {
    setInputEmail(event.target.value)
  }
  const handleInputUsername = (event) => {
    setInputUsername(event.target.value)
  }
  const handleInputPassword = (event) => {
    setInputPassword(event.target.value)
  }
  const handleInputPasswordConfirm = (event) => {
    setInputPasswordConfirm(event.target.value)
  }

  return (
    <div
      className="register-container"
      style={{ backgroundColor: "#70B9BE" }}>
      <main className="register-main">
        <article className="register-article">
          <form
            onSubmit={handleSubmit}
            className="register-form">
            <h1 className="register-header">Create an account</h1>
            <Input
              imgUrl={MailImg}
              labelText={"email"}
              name={"email"}
              placeholder={"Email"}
              type={"email"}
              onChange={handleInputEmail}
              required={true}
            />
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
            <Input
              imgUrl={LockImg}
              labelText={"password"}
              name={"password-confirm"}
              placeholder={"Repeat password"}
              type={"password"}
              onChange={handleInputPasswordConfirm}
              required={true}
            />
            <button
              type="submit"
              className="register-button">
              Register
            </button>
            <br />
            {displayError && <output>User already exists</output>}
            {passwordNotSame && <output>Password doesn't match</output>}
          </form>
          <p className="login-link">
            Already have an account? <Link to={"/login"}>Log in</Link>
          </p>
        </article>
      </main>
      <Navbar />
    </div>
  )
}

export default Register

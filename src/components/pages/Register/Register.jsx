import React, { useState } from "react"
import Navbar from "../../shared/Navbar/Navbar"
import UserImg from "../../../assets/Images/Profile.svg"
import LockImg from "../../../assets/Images/Lock.svg"
import MailImg from "../../../assets/Images/Message.svg"
import { Link } from "react-router-dom"

function Register() {
  const [inputEmail, setInputEmail] = useState("")
  const [inputUsername, setInputUsername] = useState("")
  const [inputPassword, setInputPassword] = useState("")
  const [inputPasswordConfirm, setInputPasswordConfirm] = useState("")

  const handleSubmit = (event) => {}

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
    <>
      <main>
        <article>
          <form onSubmit={handleSubmit}>
            <h1>Creat an account</h1>
            <div>
              <label htmlFor="email">email</label>
              <img
                src={MailImg}
                alt=""
              />
              <input
                onChange={handleInputEmail}
                value={inputEmail}
                required
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div>
              <label htmlFor="username">username</label>
              <img
                src={UserImg}
                alt=""
              />
              <input
                onChange={handleInputUsername}
                value={inputUsername}
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
                onChange={handleInputPassword}
                value={inputPassword}
                required
                type="password"
                id="password"
                name="password"
              />
            </div>
            <div>
              <label htmlFor="password-confirm">Confirm password</label>
              <img
                src={LockImg}
                alt=""
              />
              <input
                onChange={handleInputPasswordConfirm}
                value={inputPasswordConfirm}
                required
                type="password"
                id="password-confirm"
                name="password-confirm"
              />
            </div>
            <button type="submit">Register</button>
          </form>
          <Link to={"/login"}>Already have an account?</Link>
        </article>
      </main>
      <Navbar />
    </>
  )
}

export default Register

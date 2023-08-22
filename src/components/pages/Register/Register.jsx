import React, { useEffect, useState } from "react"
import Navbar from "../../shared/Navbar/Navbar"
import UserImg from "../../../assets/Images/Profile.svg"
import LockImg from "../../../assets/Images/Lock.svg"
import MailImg from "../../../assets/Images/Message.svg"
import { Link, useNavigate } from "react-router-dom"
import "./Register.css"

function Register() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputPasswordConfirm, setInputPasswordConfirm] = useState("");


  const [displayError, setDisplayError] = useState(false)
  const [passwordNotSame, setPasswordNotSame] = useState(false)

  const [users, setUsers] = useState(() => {
    const usersStorage = JSON.parse(localStorage.getItem("users"))
    return usersStorage ? usersStorage : []
  })

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    if (
      users.find((user) => {
        console.log(user)
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
        loggedIn: false,
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
    setInputEmail(event.target.value);
  };
  const handleInputUsername = (event) => {
    setInputUsername(event.target.value);
  };
  const handleInputPassword = (event) => {
    setInputPassword(event.target.value);
  };
  const handleInputPasswordConfirm = (event) => {
    setInputPasswordConfirm(event.target.value);
  };

  return (
    <div className="register-container">
      <main>
        <article className="register-article">
          <form onSubmit={handleSubmit} className="register-form">
            <h1 className="register-header">Create an account</h1>
            <div className="input-container">
              <label htmlFor="email">email</label>
              <img src={MailImg} alt="" />
              <input
                onChange={handleInputEmail}
                value={inputEmail}
                required
                type="email"
                id="email"
                name="email"
                className="input-field"
              />
            </div>
            <div className="input-container">
              <label htmlFor="username">username</label>
              <img src={UserImg} alt="" />
              <input
                onChange={handleInputUsername}
                value={inputUsername}
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
                value={inputPassword}
                required
                type="password"
                id="password"
                name="password"
                className="input-field"
              />
            </div>
            <div className="input-container">
              <label htmlFor="password-confirm">Confirm password</label>
              <img src={LockImg} alt="" />
              <input
                onChange={handleInputPasswordConfirm}
                value={inputPasswordConfirm}
                required
                type="password"
                id="password-confirm"
                name="password-confirm"
                className="input-field"
              />
            </div>

            <button type="submit" className="register-button">
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
  );
}

export default Register;

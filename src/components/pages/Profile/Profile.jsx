import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../../shared/Navbar/Navbar"
import "./Profile.css"
import Input from "../../shared/Input/Input"
import UserImg from "../../../assets/Images/Profile.svg"
import LockImg from "../../../assets/Images/Lock.svg"
import MailImg from "../../../assets/Images/Message.svg"

function Profile() {
  const [users, setUsers] = useState(() => {
    const usersStorage = JSON.parse(localStorage.getItem("users"))
    return usersStorage ? usersStorage : []
  })
  const [editUsername, setEditUsername] = useState(false)
  const [editEmail, setEditEmail] = useState(false)
  const [editPassword, setEditPassword] = useState(false)

  const [inputEmail, setInputEmail] = useState("")
  const [inputUsername, setInputUsername] = useState("")
  const [inputPassword, setInputPassword] = useState("")
  const [inputPasswordConfirm, setInputPasswordConfirm] = useState("")

  const [displayError, setDisplayError] = useState(false)
  const [passwordNotSame, setPasswordNotSame] = useState(false)

  const currentUser = users.find((user) => user.loggedIn === true)
  const navigate = useNavigate()

  useEffect(() => {
    if (!currentUser) {
      navigate("/login")
    }
  }, [users])

  const logOutUser = () => {
    setUsers(
      users.map((user) => {
        return user.loggedIn === true ? { ...user, loggedIn: false } : user
      })
    )
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

  const handleEdit = () => {
    if (
      users
        .filter((user) => user.loggedIn !== true)
        .find((user) => {
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
      ...users.filter((user) => user.loggedIn !== true),
      {
        username: inputUsername || currentUser.username,
        email: inputEmail || currentUser.email,
        password: inputPassword || currentUser.password,
        favorites: currentUser.favorites,
        loggedIn: true,
      },
    ])

    setEditUsername(false)
    setEditEmail(false)
    setEditPassword(false)
  }

  if (!currentUser) {
    return
  }

  return (
    <>
      <main
        className="profile-container"
        style={{ backgroundColor: "#70B9BE" }}>
        <article className="profile-article">
          <h1 className="profile-header">My Account</h1>
          {editUsername ? (
            <div className="profile-section-edit">
              <Input
                imgUrl={UserImg}
                labelText={"username"}
                name={"username"}
                placeholder={"Username"}
                type={"text"}
                onChange={handleInputUsername}
                required={true}
                defaultValue={currentUser.username}
              />
              <button
                className="profile-button"
                onClick={handleEdit}>
                Done
              </button>
            </div>
          ) : (
            <div className="profile-section">
              <div className="profile-section-info">
                <p className="profile-title">Display Name</p>
                <p>{currentUser.username}</p>
              </div>
              {editEmail || editPassword || (
                <button
                  className="profile-button"
                  onClick={() => setEditUsername(true)}>
                  Edit
                </button>
              )}
            </div>
          )}
          {editEmail ? (
            <div className="profile-section-edit">
              <Input
                imgUrl={MailImg}
                labelText={"email"}
                name={"email"}
                placeholder={"Email"}
                type={"email"}
                onChange={handleInputEmail}
                required={true}
                defaultValue={currentUser.email}
              />
              <button
                className="profile-button"
                onClick={handleEdit}>
                Done
              </button>
            </div>
          ) : (
            <div className="profile-section">
              <div className="profile-section-info">
                <p className="profile-title">Email</p>
                <p>{currentUser.email}</p>
              </div>
              {editPassword || editUsername || (
                <button
                  className="profile-button"
                  onClick={() => setEditEmail(true)}>
                  Edit
                </button>
              )}
            </div>
          )}
          {editPassword ? (
            <>
              <div className="profile-section-edit">
                <Input
                  imgUrl={LockImg}
                  labelText={"password"}
                  name={"password"}
                  placeholder={"Password"}
                  type={"password"}
                  onChange={handleInputPassword}
                  required={true}
                  defaultValue={currentUser.password}
                />
                <Input
                  imgUrl={LockImg}
                  labelText={"password"}
                  name={"password-confirm"}
                  placeholder={"Repeat password"}
                  type={"password"}
                  onChange={handleInputPasswordConfirm}
                  required={true}
                  defaultValue={currentUser.username}
                />
                <button
                  className="profile-button"
                  onClick={handleEdit}>
                  Done
                </button>
              </div>
            </>
          ) : (
            <div className="profile-section">
              <div className="profile-section-info">
                <p className="profile-title">Password</p>
                <p>{currentUser.password.replaceAll(/./g, "*")}</p>
              </div>
              {editEmail || editUsername || (
                <button
                  className="profile-button"
                  onClick={() => setEditPassword(true)}>
                  Edit
                </button>
              )}
            </div>
          )}
          {displayError && <output>User already exists</output>}
          {passwordNotSame && <output>Passwords don't match</output>}
          <button
            className="logout-button"
            onClick={logOutUser}>
            Log out
          </button>
        </article>
      </main>
      <Navbar />
    </>
  )
}

export default Profile

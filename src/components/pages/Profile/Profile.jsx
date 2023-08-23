import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../../shared/Navbar/Navbar"
import "./Profile.css"

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
        loggedIn: true,
      },
    ])

    setEditUsername(false)
    setEditEmail(false)
    setEditPassword(false)

    // setTimeout(() => {
    //   navigate("/profile")
    // }, 500)
  }

  if (!currentUser) {
    return
  }

  return (
    <>
      <main className="profile-container">
        <article className="profile-article">
          <h1 className="profile-header">My Account</h1>
          {editUsername ? (
            <div className="profile-section">
              <div className="profile-section">
                <label>Display Name</label>
                <input
                  type="text"
                  defaultValue={currentUser.username}
                  onChange={handleInputUsername}
                  className="input-field"
                />
              </div>
              <button className="profile-button" onClick={handleEdit}>Done</button>
            </div>
          ) : (
            <div className="profile-section">
              <div className="profile-section">
                <p>Display Name</p>
                <p>{currentUser.username}</p>
              </div>
              <button className="profile-button" onClick={() => setEditUsername(true)}>Edit</button>
            </div>
          )}
          {editEmail ? (
            <div className="profile-section">
              <div className="profile-section">
                <label>Email</label>
                <input
                  type="email"
                  defaultValue={currentUser.email}
                  onChange={handleInputEmail}
                  className="input-field"
                />
              </div>
              <button className="profile-button" onClick={handleEdit}>Done</button>
            </div>
          ) : (
            <div className="profile-section">
              <div className="profile-section">
                <p>Email</p>
                <p>{currentUser.email}</p>
              </div>
              <button className="profile-button" onClick={() => setEditEmail(true)}>Edit</button>
            </div>
          )}
          {editPassword ? (
            <>
              <div className="profile-section">
                <div className="profile-section">
                  <label>Password</label>
                  <input
                    type="password"
                    defaultValue={currentUser.password}
                    onChange={handleInputPassword}
                    className="input-field"
                  />
                  <label>Confirm password</label>
                  <input
                    type="password"
                    defaultValue={currentUser.password}
                    onChange={handleInputPasswordConfirm}
                    className="input-field"
                  />
                </div>
                <button className="profile-button" onClick={handleEdit}>Done</button>
              </div>
            </>
          ) : (
            <div className="profile-section">
              <div className="profile-section">
                <p>Password</p>
                <p>{currentUser.password.replaceAll(/./g, "*")}</p>
              </div>
              <button className="profile-button" onClick={() => setEditPassword(true)}>Edit</button>
            </div>
          )}
          {displayError && <output>User already exists</output>}
          {passwordNotSame && <output>Password doesn't match</output>}
          <button className="logout-button" onClick={logOutUser}>Log out</button>
        </article>
      </main>
      <Navbar />
    </>
  )
}

export default Profile

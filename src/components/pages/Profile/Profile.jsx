import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../../shared/Navbar/Navbar"

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
      <main>
        <article>
          <h1>My Account</h1>
          {editUsername ? (
            <div>
              <div>
                <label>Display Name</label>
                <input
                  type="text"
                  defaultValue={currentUser.username}
                  onChange={handleInputUsername}
                />
              </div>
              <button onClick={handleEdit}>Done</button>
            </div>
          ) : (
            <div>
              <div>
                <p>Display Name</p>
                <p>{currentUser.username}</p>
              </div>
              <button onClick={() => setEditUsername(true)}>Edit</button>
            </div>
          )}
          {editEmail ? (
            <div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  defaultValue={currentUser.email}
                  onChange={handleInputEmail}
                />
              </div>
              <button onClick={handleEdit}>Done</button>
            </div>
          ) : (
            <div>
              <div>
                <p>Email</p>
                <p>{currentUser.email}</p>
              </div>
              <button onClick={() => setEditEmail(true)}>Edit</button>
            </div>
          )}
          {editPassword ? (
            <>
              <div>
                <div>
                  <label>Password</label>
                  <input
                    type="password"
                    defaultValue={currentUser.password}
                    onChange={handleInputPassword}
                  />
                  <label>Confirm password</label>
                  <input
                    type="password"
                    defaultValue={currentUser.password}
                    onChange={handleInputPasswordConfirm}
                  />
                </div>
                <button onClick={handleEdit}>Done</button>
              </div>
            </>
          ) : (
            <div>
              <div>
                <p>Password</p>
                <p>{currentUser.password.replaceAll(/./g, "*")}</p>
              </div>
              <button onClick={() => setEditPassword(true)}>Edit</button>
            </div>
          )}
          {displayError && <output>User already exists</output>}
          {passwordNotSame && <output>Password doesn't match</output>}
          <button onClick={logOutUser}>Log out</button>
        </article>
      </main>
      <Navbar />
    </>
  )
}

export default Profile

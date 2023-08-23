import React, { useEffect, useState } from "react"
import Navbar from "../../shared/Navbar/Navbar"
import { useNavigate } from "react-router-dom"
import FoodList from "../../shared/foodList/FoodList"
import Logo from "../../../assets/Images/Logo.svg"
import "./Favorites.scss"

function Favorites() {
  const [users, setUsers] = useState(() => {
    const usersStorage = JSON.parse(localStorage.getItem("users"))
    return usersStorage ? usersStorage : []
  })
  const currentUser = users.find((user) => user.loggedIn === true)

  const navigate = useNavigate()

  useEffect(() => {
    if (!currentUser) {
      navigate("/login")
    }
  }, [users])

  if (!currentUser) {
    return
  }

  console.log(currentUser.favorites)

  return (
    <>
      <main className="favorites">
        <div className="company-logo">
          <img
            src={Logo}
            alt="logo"
            className="logo-img"
          />
          <h1 className="logo-title">Tasty</h1>
        </div>
        <h1>{currentUser.username}'s favorites</h1>
        {currentUser.favorites.length > 0 ? (
          <FoodList foodList={currentUser.favorites} />
        ) : (
          <p>No favorites</p>
        )}
      </main>
      <Navbar />
    </>
  )
}

export default Favorites

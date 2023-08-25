import React from "react"
import "./Header.scss"
import Logo from "../../../assets/Images/Logo.svg"
import { Link } from "react-router-dom"

function Header() {
  return (
    <Link
      to={"/home"}
      className="company-logo">
      <img
        src={Logo}
        alt="logo"
        className="logo-img"
      />
      <h1 className="logo-title">Tasty</h1>
    </Link>
  )
}

export default Header

import React from 'react'
import './Header.scss'
import Logo from "../../../assets/Images/Logo.svg"

function Header() {
  return (
    <div className="company-logo">
      <img
        src={Logo}
        alt="logo"
        className="logo-img"
      />
      <h1 className="logo-title">Tasty</h1>
    </div>
  )
}

export default Header
import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import Logo from "../../../assets/Images/Logo.svg"
import "./SplashScreen.css"

const SplashScreen = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding")
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="splash-screen">
        <img
          src={Logo}
          alt="Logo"
          className="logo"
        />
        <h1 className="app-title">Tasty</h1>
      </div>
    </>
  )
}

export default SplashScreen

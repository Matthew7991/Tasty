import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from "../../../assets/Images/Homebtn.png";
import Search from "../../../assets/Images/Searchbtn.png";
import Heart from "../../../assets/Images/Heart.png";
import Profile from "../../../assets/Images/Profilebtn.png";
import "./Navbar.css";

const Navbar = () => {
  return ( 
    <div className="navbar">
      <NavLink to="/home" ><img src={Home} alt="Home" /></NavLink>
      <NavLink to="/areas" ><img src={Search} alt="Search" /></NavLink>
      <NavLink to="/" ><img src={Heart} alt="Heart" /></NavLink>
      <NavLink to="" ><img src={Profile} alt="Profile" /></NavLink>
    </div>
  )
}

export default Navbar;

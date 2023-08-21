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
      <NavLink to="/home" activeClassName="active"><img src={Home} alt="Home" /></NavLink>
      <NavLink to="/area/area-name" activeClassName="active"><img src={Search} alt="Search" /></NavLink>
      <NavLink exact to="/" activeClassName="active"><img src={Heart} alt="Heart" /></NavLink>
      <NavLink exact to="/" activeClassName="active"><img src={Profile} alt="Profile" /></NavLink>
    </div>
   );
}
 
export default Navbar;

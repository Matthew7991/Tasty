import React from "react"
import Navbar from "../../shared/Navbar/Navbar"
import "./Home.css"
import FilterList from "../../shared/FilterList/FilterList"
import { areaFilterApi } from "../../../utilities/areaFilterApi"
import RandomFood from "../../shared/Random/RandomFood"
import Logo from "../../../assets/Images/Logo.svg"

function Home() {
  return (
    <div className="home-container">
      <div className="company-logo">
        <img
          src={Logo}
          alt="logo"
          className="logo-img"
        />
        <h1 className="logo-title">Tasty</h1>
      </div>
      <RandomFood />
      <FilterList
        title="strArea"
        api={areaFilterApi}
        filterTitle={"Areas"}
      />
      <FilterList
        title="strCategory"
        api={"https://www.themealdb.com/api/json/v1/1/categories.php"}
        filterTitle={"Categories"}
      />
      <Navbar />
    </div>
  )
}

export default Home

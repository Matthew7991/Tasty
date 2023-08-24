import React from "react"
import Navbar from "../../shared/Navbar/Navbar"
import "./Home.css"
import FilterList from "../../shared/FilterList/FilterList"
import { areaFilterApi } from "../../../utilities/areaFilterApi"
import RandomFood from "../../shared/Random/RandomFood"
import Header from "../../shared/Header/Header"

function Home() {
  return (
    <>
      <Header/>
      <div className="home-container">
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
    </>
  )
}

export default Home

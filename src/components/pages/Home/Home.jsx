import React from "react"
import Navbar from "../../shared/Navbar/Navbar"
import "./Home.css"
import SearchInput from "../../shared/SearchInput/SearchInput"
import FilterList from '../../shared/FilterList/FilterList'
import { areaFilterApi } from "../../../utilities/areaFilterApi"
import { categorieFilterApi } from "../../../utilities/categorieFilterApi"
import RandomFood from "../../shared/Random/RandomFood"
// import Navbar from

function Home() {
  return <div className="home-container">
    <SearchInput/>
    <RandomFood/>
    <FilterList title = 'strArea' api = {areaFilterApi} filterTitle={'Areas'} />
    <FilterList title = 'strCategory' api = {'https://www.themealdb.com/api/json/v1/1/categories.php'} filterTitle={'Categoris'} />
    <Navbar/>
  </div>
}

export default Home

import React, { useEffect, useState } from "react"
import SearchBar from "../../shared/SearchBar/SearchBar"
import "./Areas.scss"
import FilterList from "../../shared/FilterList/FilterList"
import { areaFilterApi } from "../../../utilities/areaFilterApi"
import FoodList from "../../shared/foodList/FoodList"

function Areas() {
  const [areaList, setareaList] = useState([])
  const [area, setArea] = useState("american")
  const [foodList, setFoodList] = useState([])

  const handleFoodList = (event) => {
    setArea(event.target.dataset.value)
  }

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
      .then((res) => res.json())
      .then((data) => setFoodList(data.meals))
  }, [area])

  useEffect(() => {
    fetch(areaFilterApi)
      .then((res) => res.json())
      .then((data) => setareaList(data.meals))
  }, [])

  return (
    <div className="areas">
      <SearchBar />
      <FilterList
        dataList={areaList}
        onHandleFoodList={handleFoodList}
      />
      <FoodList foodList={foodList} />
    </div>
  )
}

export default Areas

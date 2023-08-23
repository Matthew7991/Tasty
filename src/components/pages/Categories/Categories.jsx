import React, { useEffect, useState } from 'react'
import SearchBar from '../../shared/SearchBar/SearchBar'
import FilterList from '../../shared/FilterList/FilterList'
import FoodList from '../../shared/foodList/FoodList'
import { categorieFilterApi } from '../../../utilities/categorieFilterApi'
import Navbar from "../../shared/Navbar/Navbar"

function Categories() {
  const [categorie, setCategorie] = useState('beef');
  const [foodList, setFoodList] = useState([]);
  const [serachInput, setSerachInput] = useState('');

  const handleSerachInput = (event) => {
    setSerachInput(event.target.value)
  }

  const handleFoodList = (event) => {
    setCategorie(event.target.dataset.value)
  }

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${serachInput}`)
      .then((res) => res.json())
      .then((data) => setFoodList(data.meals))
  }, [serachInput])

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie}`)
      .then((res) => res.json())
      .then((data) => setFoodList(data.meals));
  }, [categorie]);

  return (
    <div>
    <div className='areas'>
      <SearchBar onHandleSerachInput={handleSerachInput}/>
      {!serachInput && <FilterList title = 'strCategory' api = {categorieFilterApi} onHandleFoodList = {handleFoodList} select={categorie} />}
      {foodList ? <FoodList foodList={foodList} /> : <p>Not Result</p>}
    </div>
    <Navbar/>
    </div>
  )
}

export default Categories
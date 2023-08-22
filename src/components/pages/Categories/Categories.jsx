import React, { useEffect, useState } from 'react'
import SearchBar from '../../shared/SearchBar/SearchBar'
import FilterList from '../../shared/FilterList/FilterList'
import FoodList from '../../shared/foodList/FoodList'
import { categorieFilterApi } from '../../../utilities/categorieFilterApi'

function Categories() {
  const [categorie, setCategorie] = useState('beef');
  const [foodList, setFoodList] = useState([]);

  const handleFoodList = (event) => {
    setCategorie(event.target.dataset.value)
  }

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie}`)
      .then((res) => res.json())
      .then((data) => setFoodList(data.meals));
  }, [categorie]);

  return (
    <div className='areas'>
      <SearchBar/>
      <FilterList title = 'strCategory' api = {categorieFilterApi} onHandleFoodList = {handleFoodList}/>
      <FoodList foodList={foodList} />
    </div>
  )
}

export default Categories
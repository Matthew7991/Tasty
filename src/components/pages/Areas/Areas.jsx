import React, { useEffect, useState } from 'react'
import SearchBar from '../../shared/SearchBar/SearchBar'
import './Areas.scss'
import FilterList from '../../shared/FilterList/FilterList'
import FoodList from '../../shared/foodList/FoodList'
import { areaFilterApi } from '../../../utilities/areaFilterApi'
import Navbar from '../../shared/Navbar/Navbar'

function Areas() {
  const [area, setArea] = useState('american');
  const [foodList, setFoodList] = useState([]);

  const handleFoodList = (event) => {
    setArea(event.target.dataset.value)
  }

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
      .then((res) => res.json())
      .then((data) => setFoodList(data.meals));
  }, [area]);

  return (
    <div>

    <div className='areas'>
      <SearchBar/>
      <FilterList title = 'strArea' api = {areaFilterApi} onHandleFoodList = {handleFoodList}/>
      <FoodList foodList={foodList} />
    </div>
      <Navbar/>
    </div>
  )
}

export default Areas
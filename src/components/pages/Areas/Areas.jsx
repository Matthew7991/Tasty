import React, { useContext, useEffect, useState } from 'react'
import SearchBar from '../../shared/SearchBar/SearchBar'
import FilterList from '../../shared/FilterList/FilterList'
import FoodList from '../../shared/foodList/FoodList'
import { areaFilterApi } from '../../../utilities/areaFilterApi'
import Navbar from '../../shared/Navbar/Navbar'
import { filterListValue } from '../../../Context/filterListValue'
import './Areas.scss'

function Areas() {
  const filterValue = useContext(filterListValue).filterValue;
  const [area, setArea] = useState(() => {
    if(filterValue){
      return filterValue
    }else{
      return 'american'
    }
  })
  const [foodList, setFoodList] = useState([]);
  const [serachInput, setSerachInput] = useState('');

  const handleSerachInput = (event) => {
    setSerachInput(event.target.value)
  }

  const handleFoodList = (event) => {
    setArea(event.target.dataset.value)
  }

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${serachInput}`)
      .then((res) => res.json())
      .then((data) => setFoodList(data.meals))
  }, [serachInput])

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
      .then((res) => res.json())
      .then((data) => setFoodList(data.meals))
  }, [area])

  return (
    <div>
      <div className='areas'>
        <SearchBar onHandleSerachInput={handleSerachInput}/>
        {!serachInput && <FilterList title = 'strArea' api = {areaFilterApi} onHandleFoodList = {handleFoodList} select={area} />}
        {foodList ? <FoodList foodList={foodList} /> : <p>Not Result</p>}
      </div>
      <Navbar/>
    </div>
  )
}

export default Areas

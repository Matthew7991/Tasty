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
  const [loading, setLoading] = useState(true);
  const [foodList, setFoodList] = useState([]);
  const [serachInput, setSerachInput] = useState('');
  const [display, setDisplay] = useState(foodList);

  const handleSerachInput = (event) => {
    setSerachInput(event.target.value)
  }

  const handleFoodList = (event) => {
    setArea(event.target.dataset.value)
  }

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
      .then((res) => res.json())
      .then((data) => {
        setFoodList(data.meals)
        setLoading(false)
      })
  }, [area])

  useEffect(() => {
    if (foodList.length > 0) {
      setDisplay(foodList.filter(item => item.strMeal.toLowerCase().includes(serachInput)))
    }
  }, [serachInput, foodList])

  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <div>
      <div className='areas'>
        <SearchBar onHandleSerachInput={handleSerachInput} />
        <FilterList title = 'strArea' api = {areaFilterApi} onHandleFoodList = {handleFoodList} select={area} />
        <FoodList foodList={display} />
      </div>
      <Navbar/>
    </div>
  )
}

export default Areas

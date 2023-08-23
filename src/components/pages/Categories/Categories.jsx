import React, { useContext, useEffect, useState } from 'react'
import SearchBar from '../../shared/SearchBar/SearchBar'
import FilterList from '../../shared/FilterList/FilterList'
import FoodList from '../../shared/foodList/FoodList'
import { categorieFilterApi } from '../../../utilities/categorieFilterApi'
import Navbar from "../../shared/Navbar/Navbar"
import { filterListValue } from '../../../Context/filterListValue'


function Categories() {
  const filterValue = useContext(filterListValue).filterValue;
  const [categorie, setCategorie] = useState(() => {
    if(filterValue){
      return filterValue
    }else{
      return 'beef'
    }
  });
  const [loading, setLoading] = useState(true);
  const [foodList, setFoodList] = useState([]);
  const [serachInput, setSerachInput] = useState('');
  const [display, setDisplay] = useState(foodList);

  const handleSerachInput = (event) => {
    setSerachInput(event.target.value)
  }

  const handleFoodList = (event) => {
    setCategorie(event.target.dataset.value)
  }

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie}`)
      .then((res) => res.json())
      .then((data) => {
        setFoodList(data.meals);
        setLoading(false)
      });
  }, [categorie]);

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
      <FilterList title = 'strCategory' api = {categorieFilterApi} onHandleFoodList = {handleFoodList} select={categorie} />
      <FoodList foodList={display} />
    </div>
    <Navbar/>
    </div>
  )
}

export default Categories
import React, { useEffect, useState } from 'react'
import SearchBar from '../../shared/SearchBar/SearchBar'
import FoodList from '../../shared/foodList/FoodList'
import Navbar from '../../shared/Navbar/Navbar';


function SearchItem() {
  const [foodList, setFoodList] = useState([]);
  const [serachInput, setSerachInput] = useState('');
  const [loading, setLoading] = useState(true)

  const handleSerachInput = (event) => {
    setSerachInput(event.target.value)
  }

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${serachInput}`)
      .then((res) => res.json())
      .then((data) => {
        setFoodList(data.meals)
        setLoading(false)
      })
  }, [serachInput])

  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <div className='search-page'>
      <SearchBar onHandleSerachInput={handleSerachInput}/>
      {serachInput && foodList ? <FoodList foodList={foodList} /> : <p>Not Result</p>}
      <Navbar/>
    </div>
  )
}

export default SearchItem
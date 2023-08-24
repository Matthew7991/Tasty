import React, { useEffect, useState } from 'react'
import SearchBar from '../../shared/SearchBar/SearchBar'
import FoodList from '../../shared/foodList/FoodList'
import Navbar from '../../shared/Navbar/Navbar';
import Header from '../../shared/Header/Header';


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
    <>
      <Header/>
      <div className='areas'>
        <SearchBar onHandleSerachInput={handleSerachInput}/>
        {serachInput && foodList ? <FoodList foodList={foodList} /> : <h2 className='no-result'>No Result</h2>}
        <Navbar/>
      </div>
    </>
  )
}

export default SearchItem
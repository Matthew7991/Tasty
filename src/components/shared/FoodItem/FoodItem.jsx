import React from 'react'
import { Link } from 'react-router-dom'

function FoodItem({foodItem}) {
  
  return (
    <Link to={`/details/${foodItem.idMeal}`}>
      <img src={foodItem.strMealThumb} alt="" />
      <p>{foodItem.strMeal}</p>
    </Link>
  )
}

export default FoodItem
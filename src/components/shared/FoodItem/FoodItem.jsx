import React from 'react'
import { Link } from 'react-router-dom'
import './FoodItem.scss'

function FoodItem({foodItem}) {
  
  return (
    <Link to={`/details/${foodItem.idMeal}`} className='item-card'>
      <img src={foodItem.strMealThumb} />
      <p>{foodItem.strMeal.slice(0,7)}...</p>
    </Link>
  )
}

export default FoodItem
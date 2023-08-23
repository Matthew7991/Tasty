import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './FoodItem.scss'

function FoodItem({foodItem}) {
  const location = useLocation().pathname;
  
  return (
    <Link to={`/details/${foodItem.idMeal}`} className={location === '/search' ? 'search-list' : "item-card"}>
      <img src={foodItem.strMealThumb} />
      {location === '/search' ?
        <div>
          <p>{foodItem.strMeal}</p>
          <p>{foodItem.strCategory}</p>
        </div> :
        <p>{foodItem.strMeal.slice(0,7)}...</p>
      }
    </Link>
  )
}

export default FoodItem
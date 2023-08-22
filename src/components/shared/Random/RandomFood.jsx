import React, { useEffect, useState } from 'react'
import { randomApi } from '../../../utilities/randomApi'
import { Link } from 'react-router-dom';
import "./RandomFood.css"
import FoodImg from "../../../assets/Images/Frame.svg"

function RandomFood() {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    fetch(randomApi)
      .then((res) => res.json())
      .then((data) => setRandom(data.meals[0]));
  }, [])

  return (
    <div className='random-food'>
      <h1 className='random-food-title'>Meal of the Day</h1>
      <Link to={`/details/${random.idMeal}`} className='random-food-link'>
        <div className='random-food-img-wraper'>
        <img src={FoodImg} alt="Random Food Image" className="random-food-img"/>
        </div>
        <h2 className="random-food-name">{random.strMeal}</h2>
          <div className="random-food-details">
            <p className="random-food-category">{random.strCategory}</p>
            <p className="random-food-area">{random.strArea}</p>
          </div>
          </Link>
        </div>
  )
}

export default RandomFood
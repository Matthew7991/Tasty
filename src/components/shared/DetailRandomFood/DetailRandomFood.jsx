import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FoodImg from "../../../assets/Images/Frame.svg"

function DetailRandomFood({localId}) {
  const [dayFood, setDayFood] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${localId}`)
      .then((res) => res.json())
      .then((data) => {
        setDayFood(data.meals[0])
      });
  }, [])

  return (
    <Link to={`/details/${dayFood.idMeal}`} className='random-food-link'>
      <div className='random-food-img-wraper'>
        <img src={FoodImg} alt="Random Food Image" className="random-food-img"/>
      </div>
      <h2 className="random-food-name">{dayFood.strMeal}</h2>
      <div className="random-food-details">
        <p className="random-food-category">{dayFood.strCategory}</p>
        <p className="random-food-area">{dayFood.strArea}</p>
      </div>
    </Link>
  )
}

export default DetailRandomFood
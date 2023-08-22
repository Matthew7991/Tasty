import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <Link to={`/details/${dayFood.idMeal}`}>
      <div>
        <h1>{dayFood.strMeal}</h1>
        <div>
          <p>{dayFood.strCategory}</p>
          <p>{dayFood.strArea}</p>
        </div>
      </div>
    </Link>
  )
}

export default DetailRandomFood
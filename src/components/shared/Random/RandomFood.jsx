
import React, { useEffect, useState } from "react";
import { randomApi } from "../../../utilities/randomApi";
import DetailRandomFood from "../DetailRandomFood/DetailRandomFood";
import { Link } from 'react-router-dom';
import "./RandomFood.css"
import FoodImg from "../../../assets/Images/Frame.svg"


function RandomFood() {
  const date = new Date();
  const now = date.getDate().toString() + date.getMonth().toString() + date.getFullYear().toString();
  
  const [randomId, setRandomId] = useState("");
  const [localId, setLocaleId] = useState("");

  useEffect(() => {
    fetch(randomApi)
      .then((res) => res.json())
      .then((data) => setRandomId(data.meals[0].idMeal));
  }, []);

  useEffect(() => {
    if (randomId) {
      if (localId === null) {
        setLocaleId(randomId);
        localStorage.setItem(`${now}`, randomId);
      } else {
        setLocaleId(localStorage.getItem(`${now}`));
      }
    }
  }, [randomId]);

  if (localId === '') {
    return <h1>loading...</h1>
  }

  return (

    <div>
      <h1>Meal of the Day</h1>
      <DetailRandomFood localId={localId ? localId : randomId} />
    </div>
  );
  {/* <div className='random-food'>
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
        </div> */}
  )
}

export default RandomFood;

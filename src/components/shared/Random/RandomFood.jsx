import React, { useEffect, useState } from 'react'
import { randomApi } from '../../../utilities/randomApi'
import { Link } from 'react-router-dom';

function RandomFood() {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    fetch(randomApi)
      .then((res) => res.json())
      .then((data) => setRandom(data.meals[0]));
  }, [])

  return (
    <div>
      <h1>Meal of the Day</h1>
      <Link to={`/details/${random.idMeal}`}>
        <div>
          <h1>{random.strMeal}</h1>
          <div>
            <p>{random.strCategory}</p>
            <p>{random.strArea}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default RandomFood
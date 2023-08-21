import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Details() {
  const [meal, setMeal] = useState({})
  const [showInstructions, setShowInstructions] = useState(false)

  const mealId = useParams().mealID

  let apiLink = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  if (mealId === "random") {
    apiLink = "https://www.themealdb.com/api/json/v1/1/random.php"
  }

  useEffect(() => {
    fetch(apiLink)
      .then((response) => {
        if (!response.ok) {
          throw new Error("fetching failed")
        }
        return response.json()
      })
      .then((data) => {
        // console.log(data.meals[0])
        setMeal(data.meals[0])
      })
      .catch((error) => {
        console.error(error.message)
      })
  }, [])

  // if (!meal) {
  //   return <h1>loading ...</h1>
  // }

  // console.log(meal)

  return (
    <main>
      <article>
        <img
          src={meal.strMealThumb}
          alt=""
        />
        <div>
          <h1>{meal.strMeal}</h1>
          <p>{meal.strCategory}</p>
          <p>{meal.strArea}</p>
          <div>
            {/* Die btn-active Klasse wird hinzugefügt wenn dies die active Seite ist */}
            <button
              onClick={() => setShowInstructions(false)}
              className={showInstructions || "btn-active"}>
              Ingredients
            </button>
            <button
              onClick={() => setShowInstructions(true)}
              className={showInstructions && "btn-active"}>
              Instructions
            </button>
          </div>
          {showInstructions || (
            <div>
              <h2>Ingredients</h2>
              {meal.strIngredient1 && (
                <p>{`${meal.strMeasure1} ${meal.strIngredient1}`}</p>
              )}
              {meal.strIngredient2 && (
                <p>{`${meal.strMeasure2} ${meal.strIngredient2}`}</p>
              )}
              {meal.strIngredient3 && (
                <p>{`${meal.strMeasure3} ${meal.strIngredient3}`}</p>
              )}
              {meal.strIngredient4 && (
                <p>{`${meal.strMeasure4} ${meal.strIngredient4}`}</p>
              )}
              {meal.strIngredient5 && (
                <p>{`${meal.strMeasure5} ${meal.strIngredient5}`}</p>
              )}
              {meal.strIngredient6 && (
                <p>{`${meal.strMeasure6} ${meal.strIngredient6}`}</p>
              )}
              {meal.strIngredient7 && (
                <p>{`${meal.strMeasure7} ${meal.strIngredient7}`}</p>
              )}
              {meal.strIngredient8 && (
                <p>{`${meal.strMeasure8} ${meal.strIngredient8}`}</p>
              )}
              {meal.strIngredient9 && (
                <p>{`${meal.strMeasure9} ${meal.strIngredient9}`}</p>
              )}
              {meal.strIngredient10 && (
                <p>{`${meal.strMeasure10} ${meal.strIngredient10}`}</p>
              )}
              {meal.strIngredient11 && (
                <p>{`${meal.strMeasure11} ${meal.strIngredient11}`}</p>
              )}
              {meal.strIngredient12 && (
                <p>{`${meal.strMeasure12} ${meal.strIngredient12}`}</p>
              )}
              {meal.strIngredient13 && (
                <p>{`${meal.strMeasure13} ${meal.strIngredient13}`}</p>
              )}
              {meal.strIngredient14 && (
                <p>{`${meal.strMeasure14} ${meal.strIngredient14}`}</p>
              )}
              {meal.strIngredient15 && (
                <p>{`${meal.strMeasure15} ${meal.strIngredient15}`}</p>
              )}
              {meal.strIngredient16 && (
                <p>{`${meal.strMeasure16} ${meal.strIngredient16}`}</p>
              )}
              {meal.strIngredient17 && (
                <p>{`${meal.strMeasure17} ${meal.strIngredient17}`}</p>
              )}
              {meal.strIngredient18 && (
                <p>{`${meal.strMeasure18} ${meal.strIngredient18}`}</p>
              )}
              {meal.strIngredient19 && (
                <p>{`${meal.strMeasure19} ${meal.strIngredient19}`}</p>
              )}
              {meal.strIngredient20 && (
                <p>{`${meal.strMeasure20} ${meal.strIngredient20}`}</p>
              )}
            </div>
          )}
          {showInstructions && (
            <div>
              <h2>Instructions</h2>
              <p>{meal.strInstructions}</p>
              <a
                href={meal.strYoutube}
                target="_blank">
                Video
              </a>
            </div>
          )}
        </div>
      </article>
    </main>
  )
}

export default Details

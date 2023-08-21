import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./Details.scss"

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
      <article className="details">
        <img
          src={meal.strMealThumb}
          alt=""
        />
        <div className="info-card">
          <h1 className="title">{meal.strMeal}</h1>
          <div className="tags">
            <p className="category">{meal.strCategory}</p>
            <p className="area">{meal.strArea}</p>
          </div>
          <div className="navigation">
            <button
              onClick={() => setShowInstructions(false)}
              className={showInstructions ? "" : "btn-active"}>
              Ingredients
            </button>
            <button
              onClick={() => setShowInstructions(true)}
              className={showInstructions ? "btn-active" : ""}>
              Instructions
            </button>
          </div>
          {showInstructions || (
            <div className="ingredients">
              <h2>Ingredients</h2>
              {meal.strIngredient1 && (
                <p className="ingredient">{`${meal.strMeasure1} ${meal.strIngredient1}`}</p>
              )}
              {meal.strIngredient2 && (
                <p className="ingredient">{`${meal.strMeasure2} ${meal.strIngredient2}`}</p>
              )}
              {meal.strIngredient3 && (
                <p className="ingredient">{`${meal.strMeasure3} ${meal.strIngredient3}`}</p>
              )}
              {meal.strIngredient4 && (
                <p className="ingredient">{`${meal.strMeasure4} ${meal.strIngredient4}`}</p>
              )}
              {meal.strIngredient5 && (
                <p className="ingredient">{`${meal.strMeasure5} ${meal.strIngredient5}`}</p>
              )}
              {meal.strIngredient6 && (
                <p className="ingredient">{`${meal.strMeasure6} ${meal.strIngredient6}`}</p>
              )}
              {meal.strIngredient7 && (
                <p className="ingredient">{`${meal.strMeasure7} ${meal.strIngredient7}`}</p>
              )}
              {meal.strIngredient8 && (
                <p className="ingredient">{`${meal.strMeasure8} ${meal.strIngredient8}`}</p>
              )}
              {meal.strIngredient9 && (
                <p className="ingredient">{`${meal.strMeasure9} ${meal.strIngredient9}`}</p>
              )}
              {meal.strIngredient10 && (
                <p className="ingredient">{`${meal.strMeasure10} ${meal.strIngredient10}`}</p>
              )}
              {meal.strIngredient11 && (
                <p className="ingredient">{`${meal.strMeasure11} ${meal.strIngredient11}`}</p>
              )}
              {meal.strIngredient12 && (
                <p className="ingredient">{`${meal.strMeasure12} ${meal.strIngredient12}`}</p>
              )}
              {meal.strIngredient13 && (
                <p className="ingredient">{`${meal.strMeasure13} ${meal.strIngredient13}`}</p>
              )}
              {meal.strIngredient14 && (
                <p className="ingredient">{`${meal.strMeasure14} ${meal.strIngredient14}`}</p>
              )}
              {meal.strIngredient15 && (
                <p className="ingredient">{`${meal.strMeasure15} ${meal.strIngredient15}`}</p>
              )}
              {meal.strIngredient16 && (
                <p className="ingredient">{`${meal.strMeasure16} ${meal.strIngredient16}`}</p>
              )}
              {meal.strIngredient17 && (
                <p className="ingredient">{`${meal.strMeasure17} ${meal.strIngredient17}`}</p>
              )}
              {meal.strIngredient18 && (
                <p className="ingredient">{`${meal.strMeasure18} ${meal.strIngredient18}`}</p>
              )}
              {meal.strIngredient19 && (
                <p className="ingredient">{`${meal.strMeasure19} ${meal.strIngredient19}`}</p>
              )}
              {meal.strIngredient20 && (
                <p className="ingredient">{`${meal.strMeasure20} ${meal.strIngredient20}`}</p>
              )}
            </div>
          )}
          {showInstructions && (
            <div className="instructions">
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

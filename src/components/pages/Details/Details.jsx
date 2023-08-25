import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./Details.scss"
import Navbar from "../../shared/Navbar/Navbar"

function Details() {
  const [users, setUsers] = useState(() => {
    const usersStorage = JSON.parse(localStorage.getItem("users"))
    return usersStorage ? usersStorage : []
  })
  const currentUser = users.find((user) => user.loggedIn === true)

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
        setMeal(data.meals[0])
      })
      .catch((error) => {
        console.error(error.message)
      })
  }, [])

  const handleToggleFavorite = () => {
    if (
      currentUser.favorites.find((favorite) => favorite.idMeal === meal.idMeal)
    ) {
      setUsers([
        ...users.filter((user) => user.loggedIn !== true),
        {
          username: currentUser.username,
          email: currentUser.email,
          password: currentUser.password,
          favorites: [
            ...currentUser.favorites.filter(
              (favorite) => favorite.idMeal !== meal.idMeal
            ),
          ],
          loggedIn: true,
        },
      ])
    } else {
      setUsers([
        ...users.filter((user) => user.loggedIn !== true),
        {
          username: currentUser.username,
          email: currentUser.email,
          password: currentUser.password,
          favorites: [...currentUser.favorites, meal],
          loggedIn: true,
        },
      ])
    }
  }

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users))
  }, [users])

  return (
    <main>
      <article className="details">
        <div className="img-wrapper-inner">
          {currentUser && (
            <button
              className={`${
                currentUser.favorites.find(
                  (favorite) => favorite.idMeal === meal.idMeal
                ) && "active"
              }`}
              onClick={handleToggleFavorite}>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="Heart">
                  <path
                    id="Stroke 1"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.37187 9.59832C0.298865 6.24832 1.55287 2.41932 5.06987 1.28632C6.91987 0.689322 8.96187 1.04132 10.4999 2.19832C11.9549 1.07332 14.0719 0.693322 15.9199 1.28632C19.4369 2.41932 20.6989 6.24832 19.6269 9.59832C17.9569 14.9083 10.4999 18.9983 10.4999 18.9983C10.4999 18.9983 3.09787 14.9703 1.37187 9.59832Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Stroke 3"
                    d="M14.5 4.7002C15.57 5.0462 16.326 6.0012 16.417 7.1222"
                    stroke="#C6E3E5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
          )}
          <img
            src={meal.strMealThumb}
            alt=""
          />
        </div>
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
              <pre>{meal.strInstructions}</pre>
              {meal.strYoutube && (
                <a
                  href={meal.strYoutube}
                  target="_blank">
                  Video
                </a>
              )}
            </div>
          )}
        </div>
      </article>
      <Navbar />
    </main>
  )
}

export default Details

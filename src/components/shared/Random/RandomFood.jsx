import React, { useEffect, useState } from "react"
import { randomApi } from "../../../utilities/randomApi"
import DetailRandomFood from "../DetailRandomFood/DetailRandomFood"
import "./RandomFood.css"

function RandomFood() {
  const date = new Date()
  const now =
    date.getDate().toString() +
    date.getMonth().toString() +
    date.getFullYear().toString()

  const [randomId, setRandomId] = useState(() => {
    const usersStorage = localStorage.getItem(`${now}`)
    return usersStorage ? usersStorage : ""
  })

  useEffect(() => {
    if (!randomId) {
      fetch(randomApi)
        .then((res) => res.json())
        .then((data) => setRandomId(data.meals[0].idMeal))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("users", randomId)
  }, [randomId])

  if (!randomId) {
    return <div className="loader"></div>
  }

  return (
    <div className="random-food">
      <h1 className="random-food-title">Meal of the Day</h1>
      <DetailRandomFood localId={randomId} />
    </div>
  )
}

export default RandomFood

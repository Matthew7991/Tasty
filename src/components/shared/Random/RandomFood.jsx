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
  localStorage.setItem(`Test${now}`, 642642)

  const [randomId, setRandomId] = useState("")
  const [localId, setLocaleId] = useState("")

  useEffect(() => {
    fetch(randomApi)
      .then((res) => res.json())
      .then((data) => setRandomId(data.meals[0].idMeal))
  }, [])

  useEffect(() => {
    console.log({ randomId })
    if (randomId) {
      console.log({ localId })
      console.log("localId null?", localId === null)
      if (!localId) {
        localStorage.setItem(`T${now}`, randomId)
        setLocaleId(randomId)
      } else {
        setLocaleId(localStorage.getItem(`T${now}`))
      }
    }
  }, [randomId])

  console.log({ localId })
  console.log("localId oposite", !localId)
  console.log("localId empty string", localId === "")
  console.log("localId null", localId === null)
  if (!localId) {
    return <div className="loader"></div>
  }

  return (
    <div className="random-food">
      <h1 className="random-food-title">Meal of the Day</h1>
      <DetailRandomFood localId={localId ? localId : randomId} />
    </div>
  )
}

export default RandomFood

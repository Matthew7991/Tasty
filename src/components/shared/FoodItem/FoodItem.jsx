import React from "react"
import { Link, useLocation } from "react-router-dom"
import "./FoodItem.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

function FoodItem({ foodItem }) {
  const location = useLocation().pathname

  return (
    <Link
      to={`/details/${foodItem.idMeal}`}
      className={
        location === "/search" || location === "/favorites"
          ? "search-item"
          : "item-card"
      }>
      <img src={foodItem.strMealThumb} />
      {location === "/search" || location === "/favorites" ? (
        <div className="search-item-container">
          <div>
            <h1>{foodItem.strMeal}</h1>
            <div className="text-container">
              <div className="circle"></div>
              <p>{foodItem.strCategory}</p>
            </div>
          </div>
          <div className="search-item-icon">
            <FontAwesomeIcon
              icon={faArrowLeft}
              rotation={180}
              style={{ color: "#ffffff" }}
            />
          </div>
        </div>
      ) : (
        <p>{foodItem.strMeal.slice(0, 7)}...</p>
      )}
    </Link>
  )
}

export default FoodItem

import React from "react";
import FoodItem from "../FoodItem/FoodItem";
import './FoodList.scss'
import { useLocation } from "react-router-dom";

function FoodList({ foodList }) {
  const location = useLocation().pathname;

  return (
    <ul className={location === '/search' ? 'search-list' : "food-list"}>
      {foodList.map((foodItem) => (
        <FoodItem key={foodItem.idMeal} foodItem={foodItem} />
      ))}
    </ul>
  );
}

export default FoodList;

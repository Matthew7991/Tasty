import React from "react";
import FoodItem from "../FoodItem/FoodItem";
import './FoodList.scss'

function FoodList({ foodList }) {
  return (
    <ul className="food-list">
      {foodList.map((foodItem) => (
        <FoodItem key={foodItem.idMeal} foodItem={foodItem} />
      ))}
    </ul>
  );
}

export default FoodList;

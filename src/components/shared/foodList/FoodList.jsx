import React from "react";
import FoodItem from "../FoodItem/FoodItem";

function FoodList({ foodList }) {
  return (
    <ul>
      {foodList.map((foodItem) => (
        <FoodItem key={foodItem.idMeal} foodItem={foodItem} />
      ))}
    </ul>
  );
}

export default FoodList;

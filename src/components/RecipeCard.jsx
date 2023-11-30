import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function RecipeCard({
  image,
  name,
  calories,
  cooking_time,
  ingredientLines,
}) {
  return (
    <>
      <div
        className="card w-96 bg-primary-content text-neutral-focus shadow-xl "
        style={{ maxWidth: "300px" }}
      >
        <figure>
          <img src={image} alt="recipe" />
        </figure>
        <div className="card-body justify-between text-left">
          <h2 className="card-title">{name}</h2>
          <span>COOKING TIME: {cooking_time} Minutes</span>
          <span>CALORIES: {calories.toFixed(2)} </span>
        </div>
      </div>
    </>
  );
}

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
export default function FullRecipe() {
  const location = useLocation();
  const data = location.state;
  const {
    label,
    image,
    ingredients,
    totalTime,
    cuisineType,
    dietLabels,
    healthLabels,
    url,
  } = data;

  return (
    <>
      <header className="container m-auto pb-8">
        <Navbar from={null} to={null} totalRecipes={null} />
      </header>
      <div className="container flex flex-col items-start   m-auto text-left  text-zinc-950  md:px-24 p-4 ">
        <img
          src={image}
          alt={label}
          className="mb-4  aspect-video w-full object-cover rounded-md"
        />
        <h2 className="text-2xl font-bold mb-4">{label}</h2>
        <p className="mb-4">
          <span className="font-semibold">Total Time:</span> {totalTime} minutes
        </p>

        <p className="mb-4">
          <span className="font-semibold">Cuisine Type:</span>{" "}
          {cuisineType.join(", ")}
        </p>
        <div className="mb-4">
          <p className="text-lg text-neutral-focus mb-1 font-semibold">
            Ingredients
          </p>
          <ul className="list-disc  text-md pl-5">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient.text}</li>
            ))}
          </ul>
        </div>

        <p className="mb-4">
          <span className="font-semibold">Diet Labels:</span>{" "}
          {dietLabels.join(", ")}
        </p>

        <p className="mb-4">
          <span className="font-semibold">Health Labels:</span>{" "}
          {healthLabels.join(", ")}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn w-44 text-slate-950 btn-outline my-6" style={{ backgroundColor: '#6B4C11', color: '#efe2ba' }}
          >
          View Recipe
        </a>
      </div>
    </>
  );
}

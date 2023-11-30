import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import TipOfTheDay from "./TipOfTheDay";

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

  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowTip(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col  items-center overflow-auto ">
      <header className="container fixed  w-[88%]  m-auto pb-8">
        <Navbar from={null} to={null} totalRecipes={null} />
      </header>
      <div className="container h-full mt-24  overflow-scroll flex flex-col items-start text-[#183a1d] m-auto text-left  text-zinc-950  md:px-24 p-4 ">
        <img
          src={image}
          alt={label}
          className="mb-4 aspect-video w-full object-cover rounded-md"
        />
        {showTip && <TipOfTheDay />}

        <div className="p-5 shadow-2xl  bg-[#fbf5ee] rounded-xl">
          <h2 className="text-4xl font-bold mb-4">{label}</h2>
          <p className="mb-4">
            <span className="font-semibold">Total Time:</span> {totalTime}{" "}
            minutes
          </p>
          <p className="mb-4">
            <span className="font-semibold">Cuisine Type:</span>{" "}
            {cuisineType.join(", ")}
          </p>
          <div className="mb-4">
            <p className="text-lg  mb-1 font-semibold">Ingredients</p>
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
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn w-44 text-slate-950 btn-outline  hover:shadow-2xl"
          style={{ backgroundColor: "#6B4C11", color: "#efe2ba" }}
        >
          View Recipe
        </a>
      </div>
    </div>
  );
}

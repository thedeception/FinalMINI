import React from "react";
import { HiFilter } from "react-icons/hi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Filter from "./Filter";
import CardSkeleton from "./CardSkeleton";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import RecipeCard from "./RecipeCard";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const APP_ID = "4a4959e6";
  const APP_KEY = "1a6290d1bc108e4cbbffa06308c7ffd4";
  let recipeNumber = 8;
  let param_key = "";
  let param_value = "";
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(recipeNumber);
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async (FROM, TO) => {
    try {
      if (!TO) {
        // Reset load more or pagination in new search
        TO = recipeNumber;
        setTo(recipeNumber);
      }
      const paramsString = "";
      const searchParams = new URLSearchParams(paramsString);
      searchParams.set("q", search || "meet");
      searchParams.set("app_id", APP_ID);
      searchParams.set("app_key", APP_KEY);
      searchParams.set("from", FROM || from);
      searchParams.set("to", TO || to);
      searchParams.set([param_key], [param_value]);

      const responseData = await axios
        .get(`https://api.edamam.com/search?${searchParams.toString()}`)
        .then((res) => {
          setIsLoading(false);
          console.log(res.data);
          setResponse(res.data);
          if (FROM && TO) {
            // Load more recipes
            setRecipe([...recipe, ...res.data.hits]);
          } else {
            // Search for new recipes
            setRecipe(res.data.hits);
          }
        });
    } catch (error) {
      // Handle the error here
      setIsLoading(false);
      console.error("Error fetching recipes:", error);
      // Optionally, you can set an error state or show a message to the user
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecipe([]);
    setIsLoading(true);
    getRecipes();
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    const newFrom = to;
    const newTo = to + recipeNumber;
    setTo(newTo);
    getRecipes(newFrom, newTo);
  };
  const [selectedValue, setSelectedValue] = useState("");
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setRecipe([]);
      setIsLoading(true);
      setSelectedValue(value);
      param_key = event.target.attributes.param.textContent;
      param_value = value;
      getRecipes();
    } else {
      setSelectedValue("");
      setRecipe([]);
      setIsLoading(true);
      getRecipes();
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-auto">
      <header className="container fixed  w-[88%]  pb-8  m-auto ">
        <Navbar
          from={from}
          to={to}
          totalRecipes={!isLoading && response.count}
        />
      </header>
      <div
        className="container m-auto mt-24 text-center md:text-left text-zinc-950 text-4xl p-4 font-semibold"
        style={{ color: "#6B4C11" }}
      >
        INGREDIENTS
      </div>
      <form
        className="container m-auto flex justify-center gap-1 items-center pb-2 "
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          // style={{ width: "calc(100% - 131px)" }}
          placeholder="Search…"
          value={search}
          onInput={handleSearch}
          className="p-2 bg-primary-content border border-[#dedede] rounded-lg w-full mx-5"
        />

        <label className="cursor-pointer" htmlFor="filter">
          {" "}
          <HiFilter className="text-[#6b4c11]" size={35} />
        </label>
      </form>

      <Filter
        handleCheckboxChange={handleCheckboxChange}
        selectedValue={selectedValue}
      />
      <div
        className="container m-auto text-center md:text-left text-zinc-950 text-4xl font-semibold p-4"
        style={{ color: "#6B4C11" }}
      >
        SEARCH RESULTS
      </div>

      <div className="container flex gap-11 justify-center h-[50vh] overflow-scroll flex-wrap m-auto">
        {recipe.map((recipe) => (
          <Link to={`/${recipe.recipe.label}`} state={recipe.recipe}>
            <RecipeCard
              key={recipe.recipe.label}
              name={recipe.recipe.label}
              image={recipe.recipe.image}
              cooking_time={recipe.recipe.totalTime}
              calories={recipe.recipe.calories}
              url={recipe.recipe.url}
              ingredientLines={recipe.recipe.ingredientLines}
            />
          </Link>
        ))}
        {isLoading && <CardSkeleton cards={recipeNumber} />}
      </div>
      <button
        className="btn w-44 text-slate-950 btn-outline my-6 hover:shadow-2xl"
        style={{ backgroundColor: "#6B4C11", color: "#efe2ba" }}
        disabled={!isLoading && !response.more}
        onClick={handleLoadMore}
      >
        Load More
      </button>
    </div>
  );
}

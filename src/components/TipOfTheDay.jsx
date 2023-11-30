import React, { useState, useEffect } from "react";
import { AiTwotoneBulb } from "react-icons/ai";

const TipOfTheDay = () => {
  const [tip, setTip] = useState("");

  useEffect(() => {
    // Fetch a random tip of the day when the component mounts
    fetchRandomTip();
  }, []);

  const fetchRandomTip = async () => {
    try {
      // Fetch your tips data from an API or any other source
      // For now, let's consider a sample array of tips
      const tipsArray = [
        "Use fresh ingredients for better taste.",
        "Experiment with different spices to enhance flavors.",
        "Preheat your oven before baking for best results.",
        "Master basic knife skills for efficient food preparation.",
        "Try cooking with seasonal produce for fresher dishes.",
        "Read recipes thoroughly before starting to avoid surprises.",
        "Invest in quality cookware for better cooking results.",
        "Use a timer to avoid overcooking or burning your dishes.",
        "Explore international cuisines to broaden your culinary skills.",
        "Perfect your egg-cooking techniques—boiling, poaching, and scrambling.",
        "Keep a well-stocked pantry with essential ingredients for impromptu meals.",
        "Use a kitchen scale for accurate measurements in baking.",
        "Practice mise en place—preparing and organizing ingredients before cooking.",
        "Experiment with different cooking methods, such as grilling, roasting, and sautéing.",
        "Don't be afraid to get creative and adapt recipes to your taste.",
        "Learn the art of balancing flavors—sweet, salty, sour, and umami.",
        "Keep your workspace clean and organized for efficient cooking.",
        "Use fresh herbs to add brightness and freshness to your dishes.",
        "Master the art of making sauces—hollandaise, béchamel, and more.",
        "Invest in a good-quality chef's knife for precise cutting.",
        "Try your hand at homemade bread for a rewarding baking experience.",
        "Use a food thermometer to ensure meats are cooked to the right temperature.",
        "Explore vegetarian meals for a healthier and varied diet.",
        "Cook with different oils to add unique flavors to your dishes.",
        "Perfect your rice-cooking skills for fluffy and flavorful results.",
        "Experiment with fermented foods like kimchi and sauerkraut.",
        "Make your own stock for rich and flavorful soups and stews.",
        "Perfect your pancake flipping technique for fluffy pancakes.",
        "Use a mandoline for uniform vegetable slices.",
        "Homemade pizza dough allows for personalized and delicious pizzas.",
        "Explore Middle Eastern flavors with spices like cumin and coriander.",
        "Experiment with different cheeses to complement your dishes.",
        "Learn the basics of wine pairing for enjoyable meals.",
        "Make your own salad dressings for healthier and tastier options.",
        "Try your hand at homemade sushi rolls for a fun culinary project.",
        "Experiment with different grains like quinoa, farro, and bulgur.",
        "Master the art of making a perfect guacamole for delicious dips.",
        // Add more tips as needed
      ];
      

      // Randomly select a tip from the array
      const randomTip = tipsArray[Math.floor(Math.random() * tipsArray.length)];

      // Set the selected tip in the state
      setTip(randomTip);
    } catch (error) {
      console.error("Error fetching tip:", error);
      // Handle errors appropriately
    }
  };

  return (
    <div className="w-full container flex justify-end m-auto font-sans text-center md:text-left font-serif font-bold">
      <span className="w-[400px] text-zinc-950 p-4 flex flex-col gap-1 text-md shadow-lg w-fit rounded-xl bg-[#f6c453]">
        <span className="flex gap-1 items-center">
          <AiTwotoneBulb />
          Tip of the Day
        </span>
        <span>{tip}</span>
      </span>
    </div>
  );
};

export default TipOfTheDay;

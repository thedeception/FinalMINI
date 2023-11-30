import React, { useState, useEffect } from "react";

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
        "Tip 1: Use fresh ingredients for better taste.",
        "Tip 2: Experiment with different spices to enhance flavors.",
        "Tip 3: Preheat your oven before baking for best results.",
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
    <div className="container m-auto text-center md:text-left text-zinc-950 text-4xl font-serif p-4 font-bold">
      Tip of the Day: {tip}
    </div>
  );
};

export default TipOfTheDay;

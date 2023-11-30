import "./App.css";
import React, { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FullRecipe from "./components/FullRecipe";
import Home from "./components/Home";
import Landing from "./components/Landing";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Landing />}/> */}
          <Route path="/" element={<Home />} />
          <Route path="/:dish" element={<FullRecipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

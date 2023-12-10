import React from "react";
import "./App.css";
import { Popup } from "./components/Popup";
import { AllProducts } from "./components/AllProducts";
import { Navbar } from "./components/Navbar";
import { Slider } from "./components/Slider";
import { cardsData } from "./helpers/Data";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider cardsData={cardsData} />
      <AllProducts />
      <Popup />
    </div>
  );
}

export default App;

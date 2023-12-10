import React, { useState, useRef } from "react";
import "../styles/Slider.css";
import { cardsData } from "../helpers/Data";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const Slider = ({ cardsData }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedColors, setSelectedColors] = useState({});
  const [selectedColorName, setSelectedColorName] = useState("#e6ca97");
  const itemsPerPage = 4;

  const visibleCards = cardsData.slice(startIndex, startIndex + itemsPerPage);
  const sliderRef = useRef(null);

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, cardsData.length - itemsPerPage)
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const handleColorChange = (color, cardId, colorName) => {
    setSelectedColors((prevColors) => ({
      ...prevColors,
      [cardId]: { color, name: colorName },
    }));
    setSelectedColorName(colorName);
  };

  const handleSliderScroll = (event) => {
    const slider = sliderRef.current;
    slider.scrollLeft += event.deltaY;
  };

  return (
    <div className="sliderGenel">
      <div className="sliderTitle">Moissanite Engagement Rings</div>
      <div
        className="sliderContainer"
        onWheel={handleSliderScroll}
        ref={sliderRef}
      >
        <div className="slider">
          {visibleCards.map((card) => (
            <div key={card.id} className="card">
              <img
                src={card.images[selectedColors[card.id]?.name || "#e6ca97"]}
                alt={card.title}
              />
              <div className="cardInfo">
                <h4>{card.title}</h4>
                <p>{card.price}</p>
                <div
                  className="colorIndicator"
                  style={{ backgroundColor: card.color }}
                ></div>
                <div className="colorButtons" id={`colorButtons_${card.id}`}>
                  {["#e6ca97", "#d9d9d9", "#e1a4a9"].map((color) => (
                    <button
                      key={color}
                      className={`colorButton ${
                        color === selectedColors[card.id]?.color ? "active" : ""
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorChange(color, card.id, color)}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="buttonContainer">
        <button onClick={handlePrev}>
          <ArrowBackIosNewIcon />
        </button>
        <button onClick={handleNext}>
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
};

export function App() {
  return (
    <div className="App">
      <Slider cardsData={cardsData} />
    </div>
  );
}

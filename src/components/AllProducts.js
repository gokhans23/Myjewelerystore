import React, { useState } from "react";
import "../styles/AllProducts.css";
import LocalMallIcon from "@mui/icons-material/LocalMall";

export const AllProducts = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      className={`AllProducts ${clicked ? "clicked" : ""}`}
      onClick={handleClick}
    >
      <span className="centered-text">
        <LocalMallIcon />
        VIEW ALL PRODUCTS
      </span>
    </div>
  );
};

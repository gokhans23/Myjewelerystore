import React from "react";
import "../styles/Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="jevelerystore"> MY JEWELERY STORE</div>
      <div className="searchstore">
        <SearchIcon />
        <ShoppingBagIcon />
      </div>
    </div>
  );
};

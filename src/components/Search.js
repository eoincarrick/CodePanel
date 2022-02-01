import React from "react";
import { FaSearch } from "react-icons/fa";
import "./style/Search.css";

function Search() {
  return (
    <div className="searchContainer">
      <div className="input">
        <input className="searchInput" type="search" placeholder="Search" />
        <FaSearch className="icon" />
      </div>
    </div>
  );
}

export default Search;

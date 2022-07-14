import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="input-group input-group-lg w-75 ms-20">
      <span className="input-group-text" id="inputGroup-sizing-lg">
        <FaSearch />
      </span>
      <input
        type="text"
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
      />
    </div>
  );
};

export default Search;

import React, { useState } from "react";
import getImages from "../requests/getImages";
import "../styles/search.css";

function Search() {
  const [value, setValue] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    getImages(value);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-bar"
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="search-button" type="submit">
        Search...
      </button>
    </form>
  );
}

export default Search;

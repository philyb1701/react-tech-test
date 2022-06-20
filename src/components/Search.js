import React, { useState } from "react";
import "../styles/search.css";

function Search() {
  const [value, setValue] = useState();

  return (
    <>
      <form>
        <input
          className="search-bar"
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="search-button" type="submit">
          Search...
        </button>
      </form>
    </>
  );
}

export default Search;

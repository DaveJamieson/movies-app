import React, { useEffect, useRef, useState } from "react";

const SearchBar = ({ handleSearch, searchBarInput }) => {
  const searchBarRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    searchBarRef.current.focus();
  }, []);

  const handleInputChange = (event) => {
    handleSearch(event);
    if (event.target.value !== "") {
      setIsFocused(true);
    }
  };

  return (
    <input
      type="text"
      name="searchBar"
      onChange={handleInputChange}
      value={searchBarInput}
      placeholder="Search For A Movie!!"
      ref={searchBarRef}
      style={{ caretColor: isFocused ? "auto" : "transparent" }}
    />
  );
};

export default SearchBar;

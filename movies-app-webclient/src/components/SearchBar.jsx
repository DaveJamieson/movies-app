const SearchBar = ({ handleSearch, searchBarInput }) => {
  return (
    <input
      type="text"
      name="searchBar"
      onChange={handleSearch}
      value={searchBarInput}
      placeholder="Enter A Movie Name"
    />
  );
};
export default SearchBar;

const SearchBar = ({ handleSearch, searchBarInput }) => {
  return (
    <input
      type="text"
      name="searchBar"
      onChange={handleSearch}
      value={searchBarInput}
      placeholder="Search For A Movie!!"
    />
  );
};
export default SearchBar;
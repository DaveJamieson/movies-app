const SearchBar = ({ handleSearch, searchBarInput }) => {
  return (
    <input
      type="text"
      name="searchBar"
      onChange={handleSearch}
      value={searchBarInput}
      placeholder="Search For A Movie Here!!"
    />
  );
};
export default SearchBar;
const SearchBar = ({handleSearch, searchBarInput}) => {
  return (
    <input
    type="text"
    onChange={handleSearch}
    value={searchBarInput}
    placeholder="Enter Movie Name Here"
  />
  )
}
export default SearchBar
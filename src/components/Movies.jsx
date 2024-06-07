import { fetchMovies } from "../api/movie-api.js";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar.jsx";

const Movies = () => {
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [searchError, setSearchError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchBarInput, setSearchBarInput] = useState("");

  const handleSearch = (event) => {
    const input = event.target.value;
    setSearchBarInput(input);
  };

  useEffect(() => {
    const fetchData = async () => {
         try {
        setIsLoading(true);
        const moviesInfo = await fetchMovies(searchBarInput);
        console.log("moviesInfo.Search = ", moviesInfo.Search);
        if (moviesInfo.Response === "True") {
          setSearchedMovie(moviesInfo.Search);
          setSearchError("");
        } else {
          setSearchedMovie([]);
          setSearchError(moviesInfo.Error);
        }
      } catch (err) {
        setSearchError("Something went wrong!!");
        setSearchedMovie([]);
      } finally {
        setIsLoading(false);
      }
    };

    const loadTimeID = setTimeout(() => fetchData(), 500);

    return () => {
      clearTimeout(loadTimeID);
    };
  }, [searchBarInput]);

  return (
    <>
    <SearchBar 
      handleSearch={handleSearch}
      searchBarInput={searchBarInput}
    />
      {isLoading && <p>Loading...</p>}
      {searchError && <p>{searchError}</p>}
      {searchedMovie.map((movie) => (
        <ul key={movie.imdbID} style={{ listStyle: "none" }}>
          <li>
            <h2>{movie.Title}</h2>
            <img src={movie.Poster} alt={movie.imdbID} />
          </li>
        </ul>
      ))}
    </>
  );
};
export default Movies;

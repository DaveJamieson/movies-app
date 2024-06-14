import { fetchMovies } from "../api/movie-api.js";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar.jsx";
import GradientCircularProgress from "./GradientCircularProgress.jsx";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [searchError, setSearchError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchBarInput, setSearchBarInput] = useState("");

  const navigate = useNavigate();
  const handleSearch = (event) => {
    const input = event.target.value;
    setSearchBarInput(input);
  };

  const handleMovieSelection = (imdbID) => {
    const route = `/movie-details/${imdbID}`;
    navigate(route);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (searchBarInput !== "") {
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
      }
    };

    const loadTimeID = setTimeout(() => fetchData(), 500);

    return () => {
      clearTimeout(loadTimeID);
    };
  }, [searchBarInput]);

  return (
    <>
      <SearchBar handleSearch={handleSearch} searchBarInput={searchBarInput} />
      {searchError && !searchBarInput ? (
        <p>Please enter a movie name</p>
      ) : (
        <p>{searchError}</p>
      )}
      {isLoading && <GradientCircularProgress />}
      {searchedMovie.map((movie) => (
        <ul key={movie.imdbID} style={{ listStyle: "none" }}>
          <li onClick={() => handleMovieSelection(movie.imdbID)}>
            <h2>{movie.Title}</h2>
            <img src={movie.Poster} alt={movie.imdbID} />
          </li>
        </ul>
      ))}
    </>
  );
};
export default Movies;

import { fetchMovies } from "../api/movie-api.js";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar.jsx";
import GradientCircularProgress from "./GradientCircularProgress.jsx";
import { useNavigate } from "react-router-dom";
import cinemaPicture from "../assets/img/movies-app-background.jpg"
import movieNight from "../assets/img/movieNight.webp";

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
    const movieDetailsRoute = `/movie-details/${imdbID}`;
    navigate(movieDetailsRoute);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (searchBarInput !== "") {
        try {
          setIsLoading(true);
          setSearchedMovie([]);
          setSearchError("");
          const moviesInfo = await fetchMovies(searchBarInput);
          console.log("moviesInfo.Search = ", moviesInfo.Search);
          if (moviesInfo.Response === "True") {
            setSearchedMovie(moviesInfo.Search);
          } else {
            setSearchError(moviesInfo.Error);
          }
        } catch (err) {
          setSearchError("Something went wrong!!");
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
      <section className="info-messages">
      {searchError && !searchBarInput ? (
        <p>Please enter a movie name</p>
      ) : (
        <p>{searchError}</p>
      )}
      {isLoading && <GradientCircularProgress />}
      </section>
      {searchedMovie.length > 0 ? (
        <section className="movies-list">
          {searchedMovie.map((movie) => (
            <ul
              key={movie.imdbID}
              style={{ listStyle: "none", marginTop: "2rem" }}
            >
              <li onClick={() => handleMovieSelection(movie.imdbID)}>
                <h2>{movie.Title}</h2>
                <img src={movie.Poster} alt={movie.imdbID} />
              </li>
            </ul>
          ))}
        </section>
      ) : (
        <div className="main-image-container" >
          <img className="main-image" src={cinemaPicture} alt="Cinema" />
          <img className="main-image-gif" src={movieNight} alt="Movie Night!!" />
      </div>
      )}
    </>
  );
};
export default Movies;

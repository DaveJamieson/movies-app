import React from "react";
import { useNavigate } from "react-router-dom";
import cinemaPicture from "../assets/img/movies-app-background.jpg";
import movieNight from "../assets/img/deadpool.gif";
import SearchHistory from "./SearchHistory.jsx";
import { logSearch } from "../api/movie-api.js";

const Movies = ({
  searchedMovie,
  setSearchedMovie,
  searchError,
  setSearchError,
  isLoading,
  setIsLoading,
  searchBarInput,
  setSearchBarInput,
}) => {
  const navigate = useNavigate();
  const handleMovieSelection = (imdbId, title) => {
    logSearch(imdbId, title);
    const movieDetailsRoute = `/movie-details/${imdbId}`;
    navigate(movieDetailsRoute);
  };

  return (
    <>
      <section className="info-messages">
        {searchError && !searchBarInput ? (
          <p>Please enter a movie name</p>
        ) : (
          <p>{searchError}</p>
        )}
      </section>
      {searchedMovie.length > 0 ? (
        <section className="movies-list">
          {searchedMovie.map((movie) => (
            <ul key={movie.imdbID}>
              <section className="movies-list-item-container">
                <li onClick={() => handleMovieSelection(movie.imdbID, movie.Title)}>
                  <h2 className="movies-list-item-title" title={movie.Title}>
                    {movie.Title}
                  </h2>
                  <article className="movies-list-item-image-container">
                    <img className="movies-list-item-image" src={movie.Poster} alt={movie.imdbID} />
                  </article>
                </li>
              </section>
            </ul>
          ))}
        </section>
      ) : (
        <div className="main-image-and-search-history-container">
          <div className="main-image-container">
            <img className="main-image" src={cinemaPicture} alt="Cinema" />
            <img className="main-image-gif" src={movieNight} alt="Movie Night!!" />
          </div>
          <SearchHistory />
        </div>
      )}
    </>
  );
};

export default Movies;

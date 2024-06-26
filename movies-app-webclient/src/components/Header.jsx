import { fetchMovies } from "../api/movie-api.js";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import GradientCircularProgress from "./GradientCircularProgress.jsx";
import logo from "../assets/img/logo.png";

const Header = ({
  setSearchedMovie,
  setSearchError,
  setIsLoading,
  searchBarInput,
  setSearchBarInput,
  isLoading,
}) => {
  const navigate = useNavigate();

  const handleHeadingClick = () => {
    navigate("/");
    window.location.reload();
  };

  const handleSearch = (event) => {
    const input = event.target.value;
    setSearchBarInput(input);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (searchBarInput !== "") {
        try {
          setIsLoading(true);
          setSearchedMovie([]);
          setSearchError("");
          const moviesInfo = await fetchMovies(searchBarInput);
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
  }, [searchBarInput, setIsLoading, setSearchedMovie, setSearchError]);

  return (
    <div className="header">
      <h1 className="main-heading" onClick={handleHeadingClick}>
        <img src={logo} alt="logo" className="main-heading-logo" />
        </h1>
      <section className="search-bar-container">
        {searchBarInput && isLoading && <GradientCircularProgress />}
        <SearchBar handleSearch={handleSearch} searchBarInput={searchBarInput} />
        {searchBarInput && isLoading && <GradientCircularProgress />}
      </section>
  
    </div>
  );
};

export default Header;

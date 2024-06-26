import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import Header from "./components/Header";
import SearchHistory from "./components/SearchHistory";

function App() {
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [searchError, setSearchError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchBarInput, setSearchBarInput] = useState("");

  return (
    <div className="App">
      <Header
        setSearchedMovie={setSearchedMovie}
        setSearchError={setSearchError}
        setIsLoading={setIsLoading}
        searchBarInput={searchBarInput}
        setSearchBarInput={setSearchBarInput}
        isLoading={isLoading}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Movies
              searchedMovie={searchedMovie}
              setSearchedMovie={setSearchedMovie}
              searchError={searchError}
              setSearchError={setSearchError}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              searchBarInput={searchBarInput}
              setSearchBarInput={setSearchBarInput}
            />
          }
        />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        <Route path="/search-history" element={<SearchHistory />} />
      </Routes>
    </div>
  );
}

export default App;

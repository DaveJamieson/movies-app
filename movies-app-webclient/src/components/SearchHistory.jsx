import React, { useEffect, useState } from "react";
import { fetchSearchHistory } from "../api/movie-api";
import { useNavigate } from "react-router-dom";
import GradientCircularProgress from "./GradientCircularProgress.jsx";

const SearchHistory = () => {
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleMovieClick = (movieName) => {
    navigate(`/movie-details/${movieName}`);
    console.log(`Navigating to details page for: ${movieName}`);
  };

  useEffect(() => {
    const fetchHistory = async () => {
      setIsLoading(true);
      try {
        const data = await fetchSearchHistory();
        setHistory(data);
      } catch (error) {
        setError("Failed to fetch search history");
        console.error("Failed to fetch search history:", error);
      } finally {
        setIsLoading(false);
      }
    };

   fetchHistory()


  }, []);

  return (
    <div className="search-history-container">
      <h2 className="search-history-title">Popular Searches</h2>
      {isLoading ? (
        <GradientCircularProgress />
      ) : error ? (
        <p>{error}</p>
      ) : history.length === 0 ? (
        <p style={{ textAlign: "center" }}>No search history available.</p>
      ) : (
        <ul className="search-history-list">
          {history.map((item) => (
            <li
              className="search-history-list-item"
              key={item._id}
              onClick={() => handleMovieClick(item.imdb_ID)}
            >
              <p>{item.movie_name}</p>
              <p>{item.search_count}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchHistory;

{/* conditional - while item count < 4 return 4 otherwise hide the extras */}
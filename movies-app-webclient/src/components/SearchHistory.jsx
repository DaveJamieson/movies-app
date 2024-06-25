import React, { useEffect, useState } from "react";
import { fetchSearchHistory } from "../api/movie-api";
import { useNavigate } from "react-router-dom";

const SearchHistory = () => {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  const handleMovieClick = (movieName) => {
    navigate(`/movie-details/${movieName}`);
    console.log(`Navigating to details page for: ${movieName}`);
  };

  useEffect(() => {
    let isMounted = true; // Flag to track if component is mounted

    const fetchHistory = async () => {
      try {
        const data = await fetchSearchHistory();
        if (isMounted) {
          console.log("data = ", data);
          setHistory(data);
        }
      } catch (error) {
        console.error("Failed to fetch search history:", error);
      }
    };

    fetchHistory();

    // Cleanup function to prevent memory leaks
    return () => {
      isMounted = false;
    };
  }, []); // Empty dependency array ensures useEffect runs only on mount

  return (
    <div className="search-history-container">
      <h2> 
Popular Searches
      </h2>
      <ul className="search-history-list">
     
        {history.map((item) => (
          <li className="search-history-list-item" key={item._id} onClick={() => handleMovieClick(item.imdb_ID)}>
            <p>{item.movie_name}</p>
            <p>{item.search_count}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
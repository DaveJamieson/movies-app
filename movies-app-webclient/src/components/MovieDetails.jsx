import { fetchMovieDetails } from "../api/movie-api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GradientCircularProgress from "./GradientCircularProgress.jsx";

const MovieDetails = () => {
  const { movieId } = useParams();

  const [fetchError, setFetchError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const movieInfo = await fetchMovieDetails(movieId);
        console.log("movieInfo = ", movieInfo);
        console.log("movieInfoResponse = ", movieInfo.Response);
        if (movieInfo.Response === "True") {
          setMovieDetails(movieInfo);
          setFetchError("");
        } else {
          setMovieDetails({});
          setFetchError(movieInfo.Error);
        }
      } catch (err) {
        setFetchError("Something went wrong!!");
        setMovieDetails({});
      } finally {
        setIsLoading(false);
      }
    };

    const loadTimeID = setTimeout(() => fetchData(), 500);

    return () => {
      clearTimeout(loadTimeID);
    };
  }, [movieId]);

  return (
    <>
      <div className="movie-details-container">
        {fetchError && <p>{fetchError}</p>}
        {isLoading && <GradientCircularProgress />}
        <h2>{movieDetails.Title}</h2>
        <p className="movie-plot">
          <strong>Plot:</strong> {movieDetails.Plot}
        </p>
        {movieDetails.Title && (
          <section className="movie-info-container">
            <article className="movie-image">
              <img src={movieDetails.Poster} alt={movieDetails.Title} />
            </article>
            <article className="movie-info">
              <p>
                <strong>Year:</strong> {movieDetails.Year}
              </p>
              <p>
                <strong>Rated:</strong> {movieDetails.Rated}
              </p>
              <p>
                <strong>Released:</strong> {movieDetails.Released}
              </p>
              <p>
                <strong>Runtime:</strong> {movieDetails.Runtime}{" "}
                {movieDetails.Type}
              </p>
              <p>
                <strong>Genre:</strong> {movieDetails.Genre}
              </p>
              <p>
                <strong>Director:</strong> {movieDetails.Director}
              </p>
              <p>
                <strong>Writer:</strong> {movieDetails.Writer}
              </p>
              <p>
                <strong>Actors:</strong> {movieDetails.Actors}
              </p>
              <p>
                <strong>Language:</strong> {movieDetails.Language}
              </p>
              <p>
                <strong>Country:</strong> {movieDetails.Country}
              </p>
              <p>
                <strong>Awards:</strong> {movieDetails.Awards}
              </p>
              <p>
                <strong>Box Office:</strong> {movieDetails.BoxOffice}
              </p>
              <p>
                <strong>Metascore:</strong> {movieDetails.Metascore}
              </p>
              <p>
                <strong>IMDB Rating:</strong> {movieDetails.imdbRating}
              </p>
              <p>
                <strong>IMDB Votes:</strong> {movieDetails.imdbVotes}
              </p>
            </article>
          </section>
        )}
      </div>
    </>
  );
};
export default MovieDetails;

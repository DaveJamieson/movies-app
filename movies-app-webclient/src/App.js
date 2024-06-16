import Movies from "./components/Movies";
import {Route, Routes} from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import { useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();

  const handleClick = () => {
  navigate("/");
  window.location.reload();
  }


  return (
    <div className="App">
      <h1 className="main-heading" onClick={handleClick}> Movies App</h1>

      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
      </Routes>

    </div>
  );
}

export default App;

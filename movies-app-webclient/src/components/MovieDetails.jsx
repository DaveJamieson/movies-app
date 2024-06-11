import { useParams } from "react-router-dom";



const MovieDetails = () => {

const {movieId} = useParams();

  return (
    <div>
    <p>MovieDetails</p>
    <p>MovieId = {movieId}</p>
    
    
    
    </div>
  )
}
export default MovieDetails
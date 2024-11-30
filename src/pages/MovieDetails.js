import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Styles/App.css";
import { API_KEY } from "../services/api";

function MovieDetail() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const getSingleMovie = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
        );
        const movie = await response.json();
        setMovieData(movie);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    getSingleMovie();
  }, [id]); 

  if (loading) {
    return <div>Loading movie details...</div>;
  }

  if (!movieData || movieData.Response === "False") {
    return <div>Error fetching movie details. Please try again later.</div>;
  }

  return (
    <div className="movie-detail-container">
      <div>
        <img
          src={movieData.Poster || "https://via.placeholder.com/300"}
          alt={movieData.Title || "No Title Available"}
          className="movie-img"
        />
      </div>
      <div>
        <h3>{movieData.Title || "No Title Available"}</h3>
        <p>
          <strong>Year of Release:</strong> {movieData.Year || "N/A"}
        </p>
        <div>
          <strong>Actors:</strong>
          <ul>
            {movieData.Actors
              ? movieData.Actors.split(",").map((actor, index) => (
                  <li key={index}>{actor.trim()}</li>
                ))
              : "N/A"}
          </ul>
        </div>
        <p>
          <strong>Runtime:</strong> {movieData.Runtime || "N/A"}
        </p>
        <p>
          <strong>Genre:</strong> {movieData.Genre || "N/A"}
        </p>
        <p>
          <strong>Director:</strong> {movieData.Director || "N/A"}
        </p>
        <p>
          <strong>Plot Summary:</strong> {movieData.Plot || "N/A"}
        </p>
      </div>
    </div>
  );
}

export default MovieDetail;

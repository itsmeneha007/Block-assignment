import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

const API_KEY = "YOUR_OMDB_API_KEY"; 

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMovies = async (title) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`);
      const data = await res.json();
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError(data.Error);
        setMovies([]);
      }
    } catch {
      setError("Something went wrong!");
    }
    setLoading(false);
  };

  return (
    <div>
      <SearchBar onSearch={fetchMovies} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <div className="movie-list">
        {movies.map((movie) => (
          <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`} className="movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;

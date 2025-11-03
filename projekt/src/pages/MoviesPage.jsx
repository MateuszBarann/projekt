import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // pobieranie danych z API SWAPI
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/films");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        
        const sortedMovies = data.results.sort((a, b) => a.episode_id - b.episode_id);
        setMovies(sortedMovies);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load movies.");
      }
    };

    fetchMovies();
    window.scrollTo(0, 0); // odpowiednik Twojej funkcji Scroll()
  }, []);

  return (
    <div>
      <Header />
      <Nav />

      <main>
        <div className="blok">
          {error && <p style={{ color: "red" }}>{error}</p>}

          <ol id="list">
            {movies.map((film) => (
              <li key={film.episode_id}>
                <h3>Star Wars: {film.title}</h3>
                <ul>
                  <li>Year: {film.release_date}</li>
                  <li>Director: {film.director}</li>
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MoviesPage;

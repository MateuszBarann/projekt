import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
  try {
    const response = await fetch("http://localhost:3001/movies");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Fetched movies:", data); 

    setMovies(data);
  } catch (err) {
    console.error("Fetch error:", err);
    setError("Failed to load movies.");
  }
};

    fetchMovies();
    window.scrollTo(0, 0);
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
              <li key={film._id}>
                <h3>{film.title}</h3>
                <ul>
                  <li>Year: {film.release_year}</li>
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

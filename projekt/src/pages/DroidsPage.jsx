import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles.css";

const DroidsPage = () => {
  const [droids, setDroids] = useState([]);
  const [page, setPage] = useState(1);

  // Fetch pierwszej strony po załadowaniu
  useEffect(() => {
    fetchDroids(1);
  }, []);

  // Pobieranie danych z API
  const fetchDroids = async (pageNumber) => {
    try {
      const apiUrl = `https://starwars-databank-server.vercel.app/api/v1/droids?page=${pageNumber}&limit=10`;
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Network error");
      const data = await response.json();

      // Unikanie duplikatów
      setDroids((prev) => {
        const newDroids = data.data.filter(
          (dr) => !prev.some((p) => p.name === dr.name)
        );
        return [...prev, ...newDroids];
      });
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  // Przycisk "Load more"
  const LoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchDroids(nextPage);
  };

  // Przycisk "Top"
  const ScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header />
      <Nav />

      <main>
        <div className="blokP">
          <ol id="list">
            {droids.map((dr, index) => (
              <li key={index}>
                <h3>{dr.name}</h3>
                <ul>
                  <li>{dr.description}</li>
                  {dr.image && (
                    <li>
                      <img src={dr.image} alt={dr.name} />
                    </li>
                  )}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <section id="next">
          <button className="tab" onClick={LoadMore}>
            Load more
          </button>
          <button className="tab" onClick={ScrollTop}>
            Top
          </button>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default DroidsPage;

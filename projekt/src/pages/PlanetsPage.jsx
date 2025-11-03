import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles.css";

const PlanetsPage = () => {
  const [planets, setPlanets] = useState([]);
  const [page, setPage] = useState(1);

  
  useEffect(() => {
    fetchPlanets(1);
  }, []);

  
  const fetchPlanets = async (pageNumber) => {
    try {
      const apiUrl = `https://starwars-databank-server.vercel.app/api/v1/locations?page=${pageNumber}&limit=10`;
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Network error");
      const data = await response.json();

     
      setPlanets((prev) => {
        const newPlanets = data.data.filter(
          (planet) => !prev.some((p) => p.name === planet.name)
        );
        return [...prev, ...newPlanets];
      });
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  
  const LoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPlanets(nextPage);
  };

  
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
            {planets.map((planet, index) => (
              <li key={index}>
                <h3>{planet.name}</h3>
                <ul>
                  <li>{planet.description}</li>
                  {planet.image && (
                    <li>
                      <img src={planet.image} alt={planet.name} />
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

export default PlanetsPage;

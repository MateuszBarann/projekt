import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles.css";

const SpeciesPage = () => {
  const [species, setSpecies] = useState([]);
  const [page, setPage] = useState(1);

  
  useEffect(() => {
    fetchSpecies(1);
  }, []);

  
  const fetchSpecies = async (pageNumber) => {
    try {
      const apiUrl = `https://starwars-databank-server.vercel.app/api/v1/species?page=${pageNumber}&limit=10`;
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Network error");
      const data = await response.json();

      
      setSpecies((prev) => {
        const newSpecies = data.data.filter(
          (sp) => !prev.some((p) => p.name === sp.name)
        );
        return [...prev, ...newSpecies];
      });
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  
  const LoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchSpecies(nextPage);
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
            {species.map((sp, index) => (
              <li key={index}>
                <h3>{sp.name}</h3>
                <ul>
                  <li>{sp.description}</li>
                  {sp.image && (
                    <li>
                      <img src={sp.image} alt={sp.name} />
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

export default SpeciesPage;

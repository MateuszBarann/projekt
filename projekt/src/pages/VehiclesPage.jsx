import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles.css";

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [page, setPage] = useState(1);

  
  useEffect(() => {
    fetchVehicles(1);
  }, []);

  
  const fetchVehicles = async (pageNumber) => {
    try {
      const apiUrl = `https://starwars-databank-server.vercel.app/api/v1/vehicles?page=${pageNumber}&limit=10`;
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Network error");
      const data = await response.json();

      
      setVehicles((prev) => {
        const newVehicles = data.data.filter(
          (vh) => !prev.some((p) => p.name === vh.name)
        );
        return [...prev, ...newVehicles];
      });
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  
  const LoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchVehicles(nextPage);
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
            {vehicles.map((vh, index) => (
              <li key={index}>
                <h3>{vh.name}</h3>
                <ul>
                  <li>{vh.description}</li>
                  {vh.image && (
                    <li>
                      <img src={vh.image} alt={vh.name} />
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

export default VehiclesPage;

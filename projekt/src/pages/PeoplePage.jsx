import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles.css";

const PeoplePage = () => {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);

  
  useEffect(() => {
    fetchPeople(1);
  }, []);

  
  const fetchPeople = async (pageNumber) => {
    try {
      const apiUrl = `https://starwars-databank-server.vercel.app/api/v1/characters?page=${pageNumber}&limit=10`;
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Network error");
      const data = await response.json();

      
      setPeople((prev) => {
      const newPeople = data.data.filter(
        (person) => !prev.some((p) => p.name === person.name)
      );
      return [...prev, ...newPeople];
    });
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  
  const LoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPeople(nextPage);
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
            {people.map((person, index) => (
              <li key={index}>
                <h3>{person.name}</h3>
                <ul>
                  <li>{person.description}</li>
                  {person.image && (
                    <li>
                      <img src={person.image} alt={person.name} />
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

export default PeoplePage;

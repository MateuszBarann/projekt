import React from "react";
import mapImg from "../assets/Map.png";

const MainContent = () => {
  return (
    <main>
      <div id="opis">
        <p id="text">
          {/* Oto niewielkie wiki na temat odległej galaktyki z dawnych, dawnych czasów. Dane są dostarczane z SWAPI (API Gwiezdnych Wojen) */}
        </p>
      </div>

      <div id="Map">
        <img src={mapImg} alt="Map of the Star Wars Galaxy" />
      </div>
    </main>
  );
};

export default MainContent;

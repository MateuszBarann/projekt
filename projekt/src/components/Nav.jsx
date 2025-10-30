import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <Link className="tab" to="/">Map</Link>
      <Link className="tab" to="/movies">Movies</Link>
      <Link className="tab" to="/people">People</Link>
      <Link className="tab" to="/planets">Planets</Link>
      <Link className="tab" to="/species">Species</Link>
      <Link className="tab" to="/vehicles">Vehicles</Link>
      <Link className="tab" to="/droids">Droids</Link>
    </nav>
  );
};

export default Nav;

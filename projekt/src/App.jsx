import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './pages/MainPage'
import Header from './components/Header'
import Nav from './components/Nav'
import MainIndex from './components/MainIndex'
import Footer from './components/Footer'
import MoviesPage from './pages/MoviesPage'
import PeoplePage from './pages/PeoplePage'
import PlanetsPage from './pages/PlanetsPage'
import SpeciesPage from './pages/SpeciesPage'
import VehiclesPage from './pages/VehiclesPage'
import DroidsPage from './pages/DroidsPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/planets" element={<PlanetsPage />} />
        <Route path="/species" element={<SpeciesPage />} />
        <Route path="/vehicles" element={<VehiclesPage />} />
        <Route path="/droids" element={<DroidsPage />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './pages/MainPage'
import Header from './components/Header'
import Nav from './components/Nav'
import MainIndex from './components/MainIndex'
import Footer from './components/footer'
import MoviesPage from './pages/MoviesPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App

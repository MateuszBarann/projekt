import React from "react";
import mapImg from "../assets/Map.png";
import Header from '../components/Header'
import Nav from '../components/Nav'
import MainIndex from '../components/MainIndex'
import Footer from '../components/footer'

const MainPage = () => {
  return (
    <div>
        <Header></Header>
        <Nav></Nav>
        <MainIndex></MainIndex>
        <Footer></Footer>
    </div>
  );
};

export default MainPage;
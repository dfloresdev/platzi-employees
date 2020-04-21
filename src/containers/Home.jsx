import React from "react";
import "../assets/styles/App.css";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";

function Home() {
  return (
    <div className="App">
      <Header />
      <Hero />
    </div>
  );
}

export default Home;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Nav from "./Components/NavBar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
// import "./App.css";

function App() {
  return (
    <>
      <h1>Landing Page React</h1>
      <Nav />
      <Hero />
      <Footer />;
      <div className="d-flex justify-content-center">
        <Card />;
        <Card />;
        <Card />;
        <Card />
      </div>
    </>
  );
}

export default App;

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
      <div className="row g-3">
        <div className="col-sm-3">
          <Card
            titulo="Gato"
            description="This is a cat"
            image="https://cdn2.thecatapi.com/images/3sg.gif"
          />
        </div>
        <div className="col-sm-3">
          <Card
            titulo="Lovely Cat"
            description="This Marcos cat"
            image="https://cdn2.thecatapi.com/images/bkk.jpg"
          />
        </div>
        <div className="col-sm-3">
          <Card
            titulo="Persian cat"
            description="This is my lovely cat"
            image="https://cdn2.thecatapi.com/images/MTgwMDcwNg.jpg"
          />
        </div>
        <div className="col-sm-3">
          <Card
            titulo="So adorable Cat"
            description="This cat is always sleeping"
            image="https://cdn2.thecatapi.com/images/49r.gif"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

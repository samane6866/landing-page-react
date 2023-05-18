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
        <Card
          titulo="Gato"
          description="This is a cat"
          image="https://cdn2.thecatapi.com/images/3sg.gif"
        />
        ;
        <Card
          titulo="Lovely Cat"
          description="This Marcos cat"
          image="https://cdn2.thecatapi.com/images/bkk.jpg"
        />
        ;
        <Card
          titulo="Persian cat"
          description="This is my lovely cat"
          image="https://cdn2.thecatapi.com/images/MTgwMDcwNg.jpg"
        />
        ;
        <Card
          titulo="So adorable Cat"
          description="This cat is always sleeping"
          image="https://cdn2.thecatapi.com/images/49r.gif"
        />
      </div>
    </>
  );
}

export default App;

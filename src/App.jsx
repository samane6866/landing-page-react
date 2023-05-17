import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";

function Footer() {
  return (
    <nav className="navbar fixed-bottom bg-dark">
      <div className="container-fluid">
        <p className="text-light text-center">copyright@2019</p>
      </div>
    </nav>
  );
}

// function Hero() {
//   return (

//   )

// }

function Card() {
  return (
    <>
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <h1>Landing Page React</h1>
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

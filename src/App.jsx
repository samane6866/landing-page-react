import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";

function Nav() {
  return (
    <nav className="navbar fixed-top bg-dark">
      <div className="container-fluid">
        <p className="navbar-brand text-light">Start Bootstrap</p>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <div className="p-5 mb-4 bg-body-tertiary rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">A warm welcome</h1>
        <p className="col-md-8 fs-4">
          Using a series of utilities, you can create this jumbotron, just like
          the one in previous versions of Bootstrap. Check out the examples
          below for how you can remix and restyle it to your liking.
        </p>
        <button className="btn btn-primary btn-lg" type="button">
          Example button
        </button>
      </div>
    </div>
  );
}

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

function Footer() {
  return (
    <nav className="navbar fixed-bottom bg-dark">
      <div className="container-fluid">
        <p className="text-light text-center">copyright@2019</p>
      </div>
    </nav>
  );
}

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

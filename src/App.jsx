import React from "react";
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies type="movie" />} />
        <Route path="/series" element={<Movies type="tv" />} />
      </Routes>
    </div>
  );
}

export default App;

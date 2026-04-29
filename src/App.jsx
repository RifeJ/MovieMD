import React from "react";
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series2 from "./pages/Series2";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series2 />} />
      </Routes>
    </div>
  );
}

export default App;

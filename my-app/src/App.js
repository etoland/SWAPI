import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import People from "./People.js";
import Planets from "./Planets.js";
import Starships from "./Starships";
import HomePage from "./HomePage";
import Person from "./Person";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<HomePage />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/people/:id/" element={<Person />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

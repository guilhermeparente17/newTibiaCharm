import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Creatures from "./pages/Creatures/Creatures";

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="creatures" element={<Creatures />} />
      </Routes>
    </>
  );
};

export default Rotas;

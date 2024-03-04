import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Creatures from "./pages/Creatures/Creatures";
import RunicPlan from "./pages/RunicPlan/RunicPlan";
import RunicPlanRegister from "./pages/RunicPlan/components/RunicPlanRegister";
import MyRunes from "./pages/MyRunes/MyRunes";

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="creatures" element={<Creatures />} />
        <Route index path="runic-plan" element={<RunicPlan />} />
        <Route index path="runic-plan-register" element={<RunicPlanRegister />} />
        <Route index path="my-runes" element={<MyRunes />} />
      </Routes>
    </>
  );
};

export default Rotas;

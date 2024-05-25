import { Route, Routes } from "react-router-dom";

import React from "react";
import Home from "../components/home/Home";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Routers;

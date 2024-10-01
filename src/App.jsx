import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Status from "./Screens/Status";
import Add from "./Screens/Add";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Status />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

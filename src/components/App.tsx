import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage.tsx";
import AppBar from "./AppBar/AppBar.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;

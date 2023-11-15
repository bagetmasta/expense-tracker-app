import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AppBar from "./AppBar/AppBar.tsx";

const HomePage = lazy(() => import("pages/HomePage.tsx"));
const ExpensesPage = lazy(() => import("pages/ExpensesPage.tsx"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/expenses" element={<ExpensesPage />} />
    </Routes>
  );
}

export default App;

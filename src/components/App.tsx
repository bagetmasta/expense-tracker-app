import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AppBar from "./AppBar/AppBar";

const HomePage = lazy(() => import("../pages/HomePage"));
const ExpensesPage = lazy(() => import("../pages/ExpensesPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<HomePage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
      </Route>
    </Routes>
  );
}

export default App;

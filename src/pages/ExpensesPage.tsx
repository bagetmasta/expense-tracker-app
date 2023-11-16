import Calendar from "../components/Calendar/Calendar";
import TotalBalance from "../components/TotalBalance/TotalBalance";
import Expenses from "../components/Expenses/Expenses";
// import React from "react";

export default function ExpensesPage() {
  return (
    <>
      <h2>ExpensesPage</h2>
      <Calendar />
      <TotalBalance />
      <Expenses />
    </>
  );
}

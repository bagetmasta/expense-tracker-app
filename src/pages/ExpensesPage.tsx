import Calendar from "components/Calendar/Calendar.tsx";
import TotalBalance from "components/TotalBalance/TotalBalance.tsx";
import Expences from "components/Expences/Expences.tsx";
import React from "react";

export default function ExpensesPage() {
  return (
    <>
      <h2>ExpensesPage</h2>
      <Calendar />
      <TotalBalance />
      <Expences />
    </>
  );
}

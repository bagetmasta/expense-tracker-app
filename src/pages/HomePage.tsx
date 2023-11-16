import Analytics from "../components/Analytics/Analytics";
import CreditCard from "../components/CreditCard/CreditCard";
import Transactions from "../components/Transactions/Transactions";
import React from "react";
// import Box from "@mui/material/Box";
// import Fab from "@mui/material/Fab";
// import AddIcon from "@mui/icons-material/Add";

export default function HomePage() {
  return (
    <>
      <h2>HomePage</h2>
      <CreditCard />
      <Analytics />
      <Transactions />
    </>
  );
}

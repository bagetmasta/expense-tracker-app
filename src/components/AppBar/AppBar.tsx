import React from "react";
import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function AppBar() {
  const location = useLocation();
  let title;

  switch (location.pathname) {
    case "/":
      title = "Home";
      break;
    case "/expenses":
      title = "Expenses";
      break;
    default:
      title = "Home";
  }

  return (
    <>
      <header>{title}</header>
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <footer>Footer</footer>
    </>
  );
}

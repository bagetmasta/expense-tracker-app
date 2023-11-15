import React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function AppBar() {
  return (
    <>
      <header>
        <h2>AppBar</h2>
      </header>
      <Suspense>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <footer>Footer</footer>
    </>
  );
}

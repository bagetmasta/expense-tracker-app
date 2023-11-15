import React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function AppBar() {
  return (
    <>
      <header>AppBar</header>
      <Suspense>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <footer>Footer</footer>
    </>
  );
}

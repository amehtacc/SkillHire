import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  const location = useLocation();

  // Define routes where Navbar & Footer should be hidden
  const hiddenRoutes = ["/auth", "/auth/candidate/dashboard"];

  const shouldHideLayout = hiddenRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      <ToastContainer />

      {!shouldHideLayout && <Navbar />}

      <Outlet />

      {!shouldHideLayout && <Footer />}
    </>
  );
}

export default App;

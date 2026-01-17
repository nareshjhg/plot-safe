import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  const location = useLocation();

  const hideHeaderFooter =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/dealer") ||
    location.pathname.startsWith("/public");

  return (
    <div className="min-h-screen flex flex-col">
      {!hideHeaderFooter && <Navbar />}

      <main className="flex-grow">{children}</main>

      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default Layout;

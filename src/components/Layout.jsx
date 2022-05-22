import React from "react";

// Routes
import { BrowserRouter, Route } from "react-router-dom";
import RoutesApp from "../routes/Routes";

// Components
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <div className="main">
            <RoutesApp />
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Layout;

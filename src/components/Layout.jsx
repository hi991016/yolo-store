import React from "react";

// Routes
import { BrowserRouter, Route } from "react-router-dom";
import RoutesApp from "../routes/Routes";

// Components
import Header from "./Header";
import Footer from "./Footer";
import ProductViewModal from "./ProductViewModal";

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
        <ProductViewModal />
      </div>
    </BrowserRouter>
  );
};

export default Layout;

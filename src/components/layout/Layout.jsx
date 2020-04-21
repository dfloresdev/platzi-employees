import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({ children }) => (
  <div className="App">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;

import Head from "next/head";
import React from "react";
import Footer from "./footer/Footer";
import NavBar from "./navbar/NavBar";

const Layout = ({ children, scrollNavBar }: any) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar scrollNavBar={scrollNavBar} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

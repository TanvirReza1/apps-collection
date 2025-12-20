import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Header from "../Pages/Header";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Header></Header>
      </header>

      <main className="flex-1">
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

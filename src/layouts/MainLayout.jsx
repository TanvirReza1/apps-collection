import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer";

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* 🔹 Premium Page Navigation Loader */}
      {navigation.state === "loading" && <Loading text="Navigating..." />}

      <header>
        <NavBar></NavBar>
      </header>

      <main className="flex-1">
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer";
import Loading from "../Components/Loading";

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <div className="min-h-screen flex flex-col relative">
      <header>
        <NavBar></NavBar>
      </header>

      <main className="flex-1">
        {navigation.state === "loading" ? (
          <Loading text="Loading page..." />
        ) : (
          <Outlet />
        )}
      </main>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

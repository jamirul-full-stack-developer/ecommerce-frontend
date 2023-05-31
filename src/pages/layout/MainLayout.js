import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";
function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;

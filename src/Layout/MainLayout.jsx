import React from "react";
import { Outlet, useNavigate } from "react-router";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  const { state } = useNavigate();
  return (
    <div className="mainCard">
      <Header></Header>
      <div className="min-h-[calc(100vh-120px)] pt-20 md:px-8">
        {state == "loading" ? <Loading></Loading> : <Outlet />}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

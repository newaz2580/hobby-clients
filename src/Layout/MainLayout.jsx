import React from "react";
import { Outlet, useNavigate } from "react-router";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  const { state } = useNavigate();
  return (
    <div>
      <Header></Header>
      <div className="min-h-[calc(100vh-120px)] mt-20">
        {state == "loading" ? <Loading></Loading> : <Outlet />}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

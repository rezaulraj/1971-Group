
import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import SubHeader from "./SubHeader";
const SubLayout = () => {
  return (
    <div>
      <SubHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SubLayout;

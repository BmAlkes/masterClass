import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

const Default = () => {
  return (
    <>
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default Default;
